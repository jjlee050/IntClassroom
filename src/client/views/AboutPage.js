import React, { Component } from 'react';
import { ReactMic } from '@cleandersonlobo/react-mic';
import moment from 'moment';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const transcripts = [];
export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    };
  }

  startRecording = () => {
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
        console.log(currentDate + ": " + content);
        transcripts.push({
          date: currentDate,
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
  }

  stopRecording = () => {
    recognition.stop();
    console.log(transcripts);
    this.setState({
      record: false
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
      </div>
    );
  }
}
