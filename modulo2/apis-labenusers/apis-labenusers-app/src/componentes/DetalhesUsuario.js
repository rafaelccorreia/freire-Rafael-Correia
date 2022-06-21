import React from "react"

class DetalhesUsuario extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                </div>
                {this.props.detalhes ? <button onClick={this.props.onClick} id={this.props.id}>❌</button> : ""}
            </div>
        )
    }
}

export default DetalhesUsuario