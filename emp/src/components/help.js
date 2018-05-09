import React , { Component } from 'react';
import './common.css';
import Signup from './signup'
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
// import { setHeaderText } from '../../Flux/OutlookAction';
class Help extends Component {
    constructor() {
        super();

        // setHeaderText('Help Section');
        this.state = {
            selectedType: false,
            isToggleOn :true
        }
        window.saved = true;
        //  this.clickMe = this.clickMe.bind(this);
        //this.onCancel = this.onCancel.bind(this)
    }


    // onCancel() {
    //     this.props.history.goBack();
    // }

    componentDidMount() {
        // this.setState(prevState => ({
        //     isToggleOn: !prevState.isToggleOn
        // }));
        // document.getElementById('toggle').innerHTML="now you can use"

        var accItem = document.getElementsByClassName('accordionItem');
        var accHD = document.getElementsByClassName('accordionItemHeading');
        let i;
        for (i = 0; i < accHD.length; i++) {
            accHD[i].addEventListener('click', toggleItem);
        }
        function toggleItem() {
            var itemClass = this.parentNode.className;
            for (i = 0; i < accItem.length; i++) {
                accItem[i].className = 'accordionItem close';
            }
            if (itemClass === 'accordionItem close') {
                this.parentNode.className = 'accordionItem open';
            }
        }
    }




    render() {
        return (
            <div className="qqqq">
                            
                    <div className="accordionItem"  ></div>
                    <div className="accordionItem close">

                        <p className="accordionItemHeading"  >Navigation barrrrrr.....</p>
                        <div className="accordionItemContent">
                        

                            {/* <Link to='/gotonew' >Go to new </Link> */}
                            <Router>
                                <div>
                                <Switch>
                                    <div>
                                    <Route path='/help' component={Signup} />
                                    </div>
                                    </Switch>
                                    <Link to ='/help' >click</Link>
                                    </div>
                                    </Router>
                        </div>
                    </div>
      
            </div>
        )
    }


}
export default Help;