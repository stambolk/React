import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfMainChar: "",
      mainCharSurname: "",
      nameOfSecondChar: "",
      secondCharSurname: "",
      storyIsSelected: false,
      stories: [
        "",
        "A long, long time ago in a wild, wild galaxy...After leaving the wobbly planet Solaris, a group of fairies fly toward a distant speck. The speck gradually resolves into a warped, space school.Civil war strikes the galaxy, which is ruled by Simon Khan, an enchanted alien capable of jealousy and even mutilation.Terrified, a cold giant known as nameOfMainChar mainCharSurname flees the Empire, with his protector, nameOfSecondChar secondCharSurname.They head for Sidney on the planet Solaris. When they finally arrive, a fight breaks out. nameOfSecondChar uses his wild sword to defend nameOfMainChar. nameOfSecondChar and Giant nameOfMainChar decide it's time to leave Solaris and steal a lorry to shoot their way out.They encounter a tribe of people. nameOfSecondChar is attacked and the giant is captured by the people and taken back to Sidney. nameOfSecondChar must fight to save Giant nameOfMainChar but when he accidentally unearths a weathered gun, the entire future of the wild, wobbly galaxy is at stake. ",
        "A long, long time ago in a cold, cold galaxy...After leaving the hot planet Neptune, a group of teens fly toward a distant speck. The speck gradually resolves into a ripped, space school.Civil war strikes the galaxy, which is ruled by Jenna Gobble, a sticky gnome capable of vandalism and even assassination.Terrified, a giant giant known as nameOfMainChar mainCharSurname flees the Empire, with her protector, nameOfSecondChar secondCharSurname .They head for Falmouth on the planet Mooyani. When they finally arrive, a fight breaks out. secondCharSurname uses his cold arrow to defend nameOfMainChar.secondCharSurname  and Giant nameOfMainChar decide it's time to leave Mooyani and steal a space rocket to shoot their way out.They encounter a tribe of people. secondCharSurname  is attacked and the giant is captured by the people and taken back to Falmouth. secondCharSurname must fight to save Giant nameOfMainChar but when he accidentally unearths a worrying knife, the entire future of the cold, hot galaxy is at stake.",
        "An alien invasion has destroyed the world as we know it.The year is 2080. Canada is a deserted place ruled by merpeople. Once glorious, Big Ben is now wobbly.Popular lawyer, Dr nameOfMainChar mainCharSurname is humanity's only hope. nameOfMainChar finds the courage to start a secret revolutionary organization called The Republic.The fight is jeopardised when nameOfMainChar is tricked by arrogant navigator, Prof nameOfSecondChar secondCharSurname, and injures his arm.Armed with nets and space rockets, The Republic try their best to save mankind, but can they defeat violent merpeople and restore Big Ben to its former glory?",
        "A super virus has destroyed the world as we know it.The year is 2022. Wales is a frozen place ruled by apes. Once glorious, Golden Gate Bridge is now rocky.Hilarious teacher, Lady nameOfMainChar mainCharSurname is humanity's only hope. nameOfMainChar finds the courage to start a secret revolutionary organization called The Seven Wolves.The fight is jeopardised when nameOfMainChar is tricked by callous teacher, DCI nameOfSecondChar secondCharSurname, and injures her leg.Armed with oxygen tanks and nets, The Seven Wolves try their best to save mankind, but can they defeat ruthless apes and restore Golden Gate Bridge to its former glory?"
      ],
      selectedStory: ""
    }
  }



  nameOfMainCharHandler = (event) => {
    this.setState({
      nameOfMainChar: event.target.value
    })
  }
  mainCharSurnameHandler = (event) => {
    this.setState({
      mainCharSurname: event.target.value
    })
  }
  nameOfSecondCharHandler = (event) => {
    this.setState({
      nameOfSecondChar: event.target.value
    })
  }
  secondCharSurnameHandler = (event) => {
    this.setState({
      secondCharSurname: event.target.value
    })
  }
  render() {

    return (
      <div>
        <div className="row container">
          <div className="container">
            <nav>
              <div className="nav-wrapper teal lighten-2">
                <a href="http://localhost:3000/" className="brand-logo center teal lighten-2">Story Generator</a>
              </div>
            </nav>

            <div className="col s6 container">
              <div>

                <div className="input-field inline">
                  <br></br><br></br>
                  <span className="helper-text " data-error="wrong" data-success="right">Fill all fields to get your story</span>
                  <div>
                    <input
                      value={this.state.nameOfMainChar}
                      onChange={this.nameOfMainCharHandler}
                    />
                    <label>Name of main character</label>
                  </div>
                  <div>
                    <input
                      value={this.state.mainCharSurname}
                      onChange={this.mainCharSurnameHandler}
                    />
                    <label>Surname of main character</label>
                    <br></br>
                  </div>
                  <div>
                    <input
                      value={this.state.nameOfSecondChar}
                      onChange={this.nameOfSecondCharHandler}
                    />
                    <label>Name of secondary character</label>
                  </div>
                  <div>
                    <input
                      value={this.state.secondCharSurname}
                      onChange={this.secondCharSurnameHandler}
                    />
                    <label>Surname of secondary character</label>
                    <br></br>
                  </div>
                  <br></br><br></br>
                  <button
                    onClick={() => {
                      var i = Math.ceil(Math.random(0) * 4)
                      console.log(this.state.stories[i])
                      console.log(this.state.nameOfMainChar)
                      this.setState({
                        selectedStory: this.state.stories[i].toString("")
                          .replace(/nameOfMainChar/g, this.state.nameOfMainChar.toString())
                          .replace(/mainCharSurname/g, this.state.mainCharSurname.toString())
                          .replace(/nameOfSecondChar/g, this.state.nameOfSecondChar.toString())
                          .replace(/secondCharSurname/g, this.state.secondCharSurname.toString())
                        , storyIsSelected: true
                      })
                    }}
                    style={{ float: "right" }} className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
              </div>
            </div>
            <div className="col s6 container card">
              <div className="col s12" style={{ textAlign: "center" }}>
                <br></br><br></br>

                {this.state.storyIsSelected ? this.state.selectedStory : <div><h2>Your story will appear here</h2><h4>Name: {this.state.nameOfMainChar}</h4><h4>Surname: {this.state.mainCharSurname}</h4><h4>Second Name: {this.state.nameOfSecondChar}</h4><h4>Second Surname: {this.state.secondCharSurname}</h4></div>}
                <br></br><br></br><br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
