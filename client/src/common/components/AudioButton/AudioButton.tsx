import * as React from 'react';
import './AudioButton.css';

type Props = { source: string };
type State = { playing: boolean };

class AudioButton extends React.Component<Props, State> {
  audio: any;

  state = { playing: false };

  toggleAudio() {
    if (this.state.playing) {
      this.setState({ playing: false });
      this.audio.pause();
    } else {
      this.setState({ playing: true });
      this.audio.play();
    }
  }

  render() {
    const { source } = this.props;

    return (
      <div onClick={() => this.toggleAudio()} className="AudioButton">
        <div className="AudioButton__icon"></div>

        <audio
          src={source}
          ref={audio => {
            this.audio = audio;
          }}
          className="AudioButton__audio-element"
        ></audio>
      </div>
    );
  }
}

export default AudioButton;
