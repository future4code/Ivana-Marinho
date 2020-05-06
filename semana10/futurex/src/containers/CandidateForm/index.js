import React, {Component} from "react";

const candidateForm = [
    {
        name: "username",
        type: "text",
        label: "Nome",
        required: true
    },
    {
        name: "idade",
        type: "number",
        label: "Idade",
        required: true
    },
    {
        name: "applicationText",
        type: "text",
        label: "Por que sou um bom candidato?",
        required: true
    },
    {
        name: "profession",
        type: "text",
        label: "Profissão",
        required: true
    },
    {
        name: "country",
        type: "text",
        label: "País",
        required: true
    },

];

class CandidateForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            form: {}
        };
    };

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({ form: { ...this.state.form, [name]: value } });
    };

    handleOnSubmit = event => {
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                {candidateForm.map(input => (
                    <div key={input.name}>
                        <label htmlFor={input.name}>{input.label}:</label>
                        <input
                            id={input.name}
                            name={input.name}
                            type={input.type}
                            value={this.state.form[input.name] || ""}
                            required={input.required}
                            onChange={this.handleInputChange}
                            pattern={input.pattern}
                        />
                    </div>
                ))}
                <button type="submit">Enviar</button>
            </form>
               
        )
    };
};

export default CandidateForm;