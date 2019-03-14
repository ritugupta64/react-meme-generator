import React, { Component } from 'react'

class Memegenerator extends Component {

        state = {
            topText:"",
            bottomText:"",
            defaultMemeImage:"https://i.ibb.co/jkK058N/Scared-Cat.jpg",
            imageData:[]
        }

        changeText = (e) => {
            const {name, value} = e.target;
            this.setState({
                [name]:value
            })
        }



         componentDidMount(){
            fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => this.setState({
                        imageData:data
                    })
               
            )
        }


        submitForm = (e) => {
            e.preventDefault();
            const randomNum = Math.floor(Math.random() * this.state.imageData.data.memes.length);
            //console.log(randomNum);
            const randomImage = this.state.imageData.data.memes[randomNum].url;
            //console.log(randomImage);
            this.setState({
                defaultMemeImage:randomImage
            })
        }

       
       


  render() {
    return (
      <div className="container">
          <form onSubmit = {this.submitForm}>
            <input 
                type="text" 
                name="topText" 
                value= {this.state.topText}
                onChange = {this.changeText} 
                placeholder="FIRST TEXT" 
                className="inputField"
            />

            <input 
                type="text" 
                name="bottomText" 
                value={this.state.bottomText}
                onChange = {this.changeText} 
                placeholder="BOTTOM TEXT"
                className="inputField"
                style={{marginLeft:"5px"}}
                 />

            <button 
                className="btn"
                style={{marginLeft:"5px"}}
                >Get Meme
            </button>

         </form>

            <div className="memeGen">
                <h3 className="topText">{this.state.topText}</h3>
                <img src = {this.state.defaultMemeImage} alt="meme"/>
                <h3 className="bottomText">{this.state.bottomText}</h3>
            
            
            </div>


        </div>
    )
  }
}

export default Memegenerator;
