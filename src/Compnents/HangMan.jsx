import React , {Component} from "react";
import {RiRefreshLine} from 'react-icons/ri'
import RandomMaker from "./RandomMaker";
import {QuestionMaker} from "./RandomMaker";
import QuestionArea from "./QuestionArea";
import HangManImage from "./HangManImageArea";
import ShowNumberMistake from "./NumberMistakeArea";

import Image0  from './images/0.png'
import Image1  from './images/1.png'
import Image2  from './images/2.png'
import Image3  from './images/3.png'
import Image4  from './images/4.png'
import Image5  from './images/5.png'
import Image6  from './images/6.png'
import Winner from './images/winner.png'

class HangMan extends Component {
    static defaultProps = {
        MaxWrong : 6 ,
        Images : [Image0 , Image1 , Image2 , Image3 , Image4 , Image5 , Image6]
    }

    constructor() {
        super();
        this.state = {
            Mistake : 0 ,
            RandomWords : RandomMaker().toLowerCase(),
            RandomQuestion : QuestionMaker() ,
            UserChoise : new Set([]),
        }
    }

    SplitRandom = () =>{
      return this.state.RandomWords.split('').map(lettrs => (this.state.UserChoise.has(lettrs) ? lettrs : " - "))
    }

    UserValue = (event) => {
        const Target = event.target.value
        this.setState(state =>{
            return {
                UserChoise : state.UserChoise.add(Target),
                Mistake : state.Mistake + (this.state.RandomWords.includes(Target) ? 0 : 1)
            }
        })
    }

    UserKeyBord=(event)=>{
       const Target = event.key
        this.setState(state =>{
            return {
                UserChoise : state.UserChoise.add(Target),
                Mistake : state.Mistake + (this.state.RandomWords.includes(Target) ? 0 : 1)
            }
        })
    }

    MakeKeyBord(){
        return (
            'abcdefghijklmnopqrstuvwxyz'.split('').map((letters) => {
                return (
                        <button
                            value={letters}
                            key={letters}
                            onClick={this.UserValue}
                            disabled={this.state.UserChoise.has(letters)}
                        >
                            {letters.toLocaleUpperCase()}
                        </button>
                )
            })
        )
    }

    RefreshPage = () =>{
        return window.location.reload()
    }

    render() {
        let ShowKeyBords = this.MakeKeyBord()
        let KeyPressUser = document.addEventListener('keypress' , this.UserKeyBord)
        const FasleAlert = this.state.Mistake >= this.props.MaxWrong
        const TrueAlert = this.SplitRandom().join('') == this.state.RandomWords

        if (FasleAlert){
            ShowKeyBords = <p className={'WinLoseText'}>YOUR LOSER</p>
            KeyPressUser = document.removeEventListener('keypress' , this.UserKeyBord)
        }

        if(TrueAlert){
            ShowKeyBords = <p className={'WinLoseText'}>YOUR WINNER</p>
            KeyPressUser = document.removeEventListener('keypress' , this.UserKeyBord)
        }

        return (
            <section className= 'parentAll'>
                <QuestionArea RandomQuestion={this.state.RandomQuestion} RandomWords={this.state.RandomWords} SplitRandom={this.SplitRandom} FalseAlert={FasleAlert}/>

                <HangManImage TrueAlert={TrueAlert}  Image={this.props.Images} Mistake={this.state.Mistake} Winner={Winner}/>

                <ShowNumberMistake Mistake={this.state.Mistake} MaxWrong={this.props.MaxWrong}/>

                <div className='KeyBords'>
                    {ShowKeyBords}
                </div>

                <div className='RefreshButton'>
                    <button onClick={this.RefreshPage}>{<RiRefreshLine size={'1.5rem'}/>}</button>
                </div>

                {KeyPressUser}
            </section>
        )
    }
}

export default HangMan