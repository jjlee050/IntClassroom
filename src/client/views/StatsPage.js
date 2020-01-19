import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Tokenizer from 'sentence-tokenizer';
import moment from 'moment';

import ChartContainer from '../components/ChartContainer';
import DoughnutChart from '../components/DoughnutChart';
import LineChart from '../components/LineChart';

import { getData, getDateData } from '../redux/data';
import ChartActionTypes from '../redux/chart/chart.types';
import { selectCharts } from '../redux/chart/chart.selector';

import '../assets/stylesheets/stats.css';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import MicIcon from '@material-ui/icons/Mic';
import StopIcon from '@material-ui/icons/Stop';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const transcripts = [];

function renderRow(transcripts) {
  return transcripts.map(transcript => (
    <ListItem button key={transcript.time}>
      <ListItemText primary={transcript.content} />
    </ListItem>
  ));
}

class StatsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getData(),
      dateData: getDateData(this.props.charts[0].minDate),
      record: false,
      transcripts: [],
      generate: false
    };
    this.updateInterval = undefined;

    var tokenizer = new Tokenizer('Chuck');
    tokenizer.setEntry(
      'This is an entry. Possibly composed of several sentences.'
    );
    console.log('tokenizer', tokenizer.getSentences());
  }

  startRecording = () => {
    try {
      recognition.continuous = true;

      recognition.onstart = function() {
        console.log(
          'Voice recognition activated. Try speaking into the microphone.'
        );
      };

      recognition.onspeechend = function() {
        console.log(
          'You were quiet for a while so voice recognition turned itself off.'
        );
      };

      recognition.onerror = function(event) {
        if (event.error == 'no-speech') {
          console.log('No speech was detected. Try again.');
        }
      };
      recognition.onresult = function(event) {
        // event is a SpeechRecognitionEvent object.
        // It holds all the lines we have captured so far.
        // We only need the current one.
        const current = event.resultIndex;

        // Get a transcript of what was said.
        const { transcript } = event.results[current][0];

        const currentDate = moment().format('DD/MM/YYYY HH:mm:ss');
        const content = transcript.trim();
        // Add the current transcript to the contents of our Note.
        console.log(currentDate + ': ' + content);
        transcripts.push({
          time: currentDate,
          content: content
        });
      };
      recognition.start();
    } catch (e) {
      console.error(e);
    }

    this.setState({
      record: true
    });
  };

  stopRecording = () => {
    recognition.stop();
    console.log(transcripts);

    const transcriptsArr = this.state.transcripts;
    transcriptsArr.push(transcripts);
    console.log('transcriptArr', transcriptsArr);
    this.setState(state => {
      const transcriptsArr = state.transcripts.concat(transcripts);

      return {
        record: false,
        transcripts: transcriptsArr
      };
    });
  };

  componentDidMount() {
    // window.setInterval(() => {
    //   this.setState({
    //     data: getData()
    //   });
    // }, 5000);
    // this.updateInterval = setInterval(() => {
    //   this.setState({
    //     dateData: getDateData()
    //   });
    // }, 5000);
  }

  componentDidUpdate() {
    console.log('this.state.transcripts', this.state.transcripts);
  }

  render() {
    return (
      <div className="stats">
        <h1>Metrics</h1>
        <Box
          display="flex"
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
        >
          <Box display="flex" alignContent="end" flexDirection="row">
            <Box m={1} flexGrow={1}>
              <Box
                m={2}
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
              >
                <Box>
                  <Fab
                    onClick={this.startRecording}
                    color="secondary"
                    aria-label="record"
                  >
                    <MicIcon />
                  </Fab>
                </Box>
                <Box>
                  <Fab onClick={this.stopRecording} aria-label="stop">
                    <StopIcon />
                  </Fab>
                </Box>
              </Box>
              <Box
                m={2}
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
              >
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<BubbleChartIcon />}
                >
                  Analyze
                </Button>
              </Box>
            </Box>
            <Box m={1} display="flex" justifyContent="flex-start" flexGrow={1}>
              <Box
                m={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                alignContent="center"
              >
                <p>Transcripts generated</p>
                <List>
                  {this.state.transcripts.map(transcript => (
                    <ListItem button key={transcript.time}>
                      <ListItemText
                        key={transcript.time}
                        primary={transcript.content}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>

          <Box>
            <ChartContainer
              chartId={ChartActionTypes.AVERAGE_EMOTION_ID}
              chart={<LineChart data={this.state.dateData} />}
            />
          </Box>
          <Box>
            <ChartContainer
              chartId={ChartActionTypes.TOTAL_EMOTION_ID}
              chart={
                <DoughnutChart
                  data={this.state.data.data}
                  title={this.state.data.title}
                  colors={[
                    '#a8e0ff',
                    '#8ee3f5',
                    '#70cad1',
                    '#3e517a',
                    '#b08ea2',
                    '#BBB6DF'
                  ]}
                />
              }
            />
          </Box>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  charts: selectCharts
});

export default connect(mapStateToProps)(StatsPage);
