import React, { Component } from 'react';
import { ReactMic } from '@cleandersonlobo/react-mic';
import blobToArrayBuffer from 'blob-to-arraybuffer';
import axios from 'axios';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

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

        // Add the current transcript to the contents of our Note.
        console.log(transcript);
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
    this.setState({
      record: false
    });
  }

  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
      </div>
    );
  }
}
