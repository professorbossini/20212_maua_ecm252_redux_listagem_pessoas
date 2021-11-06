import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'primereact/button'
import { selecionarPessoa } from '../actions'
class PessoaLista extends Component {
    render() {
        return (
            this.props.pessoas.map((pessoa) => (
                <div key={pessoa.nome} 
                    className="flex flex-row mb-2 w-6 border border-round border-1 border-400 justify-content-center">
                    
                    <div className="p-2 w-6">
                        <p className="text-center">
                            {pessoa.nome}
                        </p>
                    </div>

                    <div
                        className="flex flex-row justify-content-center align-items-center">
                        <Button 
                            icon="pi pi-info"
                            className="p-button-rounded"
                            onClick={() => this.props.selecionarPessoa(pessoa)} />
                    </div>
                </div>
            ))
        )
    }
}

//esse nome pode ser qualquer um
//mapStateToProps é apenas uma convenção bastante utilizada
const mapStateToProps = (state) => {
    console.log(state)
    return {
        pessoas: state.pessoas
    }
}

export default connect(mapStateToProps, {selecionarPessoa})(PessoaLista)

// const resultadoDaConnect = connect(mapStateToProps)

// export default resultadoDaConnect(PessoaLista)
