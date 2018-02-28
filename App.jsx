import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <GameScene/>
         </div>
      );
   }
}

class GameScene extends React.Component {
    render() {
        return (
            <div>
                <MainPane/>
                <ScorePane/>
                <NextPane/>
                <LevelPane/>
            </div>
        );
    }
}

class MainPane extends React.Component {
    render() {
        return (
            <div id="main-pane" class="pane">
                MAIN-PANE
            </div>
        );
    }
}

class ScorePane extends React.Component {
    render() {
        return (
            <div id="score-pane" class="pane">
                SCORE-PANE
            </div>
        );
    }
}

class NextPane extends React.Component {
    render() {
        return (
            <div id="next-pane" class="pane">
                NEXT-PANE
            </div>
        );
    }
}

class LevelPane extends React.Component {
    render() {
        return (
            <div id="level-pane" class="pane">
                LEVEL-PANE
            </div>
        );
    }
}

export default App;
