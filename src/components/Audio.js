
import React from "react";
import styled from "styled-components";

function Audio() {
     return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <AudioPlayer controls autoPlay>
                    <source src="/hanuman-chalisa/song-128.mp3" type="audio/mpeg" media="(max-width: 768px)" />
                    <source src="/hanuman-chalisa/song-192.mp3" type="audio/mpeg" media="(max-width: 1024px)" />
                    <source src="/hanuman-chalisa/song.mp3" type="audio/mpeg" />
                    <p>Your browser doesn't support HTML5 audio. Here is a <a href="/hanuman-chalisa/song.mp3">link to the audio</a> instead.</p>
               </AudioPlayer>
          </div>
     );
}

export default Audio;

const AudioPlayer = styled.audio`
  width: 50%;
  height: 60px;
  background-color: #f2f2f2;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 20px auto;
`;