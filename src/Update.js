import React from 'react';

class Editcontact extends React.Component {
    constructor(props)
    {
    super(props);
    const {name,url, desc} = props.location.state;
    this.state={
        name,
        url,
        desc
    };
    }
update = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.desc === "")
        {
            alert("All the fields are required!");
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({name:'', desc:''});
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            value={this.state.name}
                            onChange={(e)=> this.setState({name:e.target.value})}></input>
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="desc" 
                            placeholder="desc"
                            value={this.state.desc}
                            onChange={(e)=> this.setState({desc:e.target.value})}></input>
                    </div>
                    <button className="ui button blue">Edit</button>
                </form>
            </div>
        )
    }
}

export default Editcontact;