import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { setInformation } from '../redux/tracking/tracking.action';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const transcripts = [];

class AboutPage extends Component {
  componentDidMount() {
    try {
      recognition.continuous = true;

      recognition.onstart = function () {
        console.log('Voice recognition activated. Try speaking into the microphone.');
      };

      recognition.onspeechend = function () {
        console.log('You were quiet for a while so voice recognition turned itself off.');
      };

      recognition.onerror = function (event) {
        if (event.error == 'no-speech') {
          console.log('No speech was detected. Try again.');
        }
      };
      recognition.onresult = function (event) {
        // event is a SpeechRecognitionEvent object.
        // It holds all the lines we have captured so far.
        // We only need the current one.
        const current = event.resultIndex;

        // Get a transcript of what was said.
        const { transcript } = event.results[current][0];

        const currentDate = moment().format('DD/MM/YYYY HH:mm:ss');
        const content = transcript.trim();
        // Add the current transcript to the contents of our Note.
        console.log(`${currentDate}: ${content}`);
        transcripts.push({
          date: currentDate,
          content
        });
      };
      recognition.start();
    } catch (e) {
      console.error(e);
    }

    axios.get('/api/startVideo').then((res) => {
      recognition.stop();
      console.log(transcripts);
      console.log(res.data);
      this.props.setInformation({
        emotions: res.data,
        transcript: transcripts
      });
    }).then(() => {
      this.props.history.push('/stats');
    });

  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h4">
              Start tracking...
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setInformation: (emotions, transcript) => dispatch(setInformation(emotions, transcript))
});

export default withRouter(connect(null, mapDispatchToProps)(AboutPage));
