import React, { Component } from 'react'
import axios from 'axios'

class CheckoutPage extends Component {
    state = {
        name: '',
        address: '',
        isOrderSend: false,
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value,
        })
    }

    sendForm = (e) => {
        e.preventDefaul()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: this.state.name,
                    address: this.state.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) =>
                this.setState({
                    name: name,
                    address: address,
                    isOrderSend: true,
                })
            )
        console.log(this.state)
    }

    renderForm = () => {
        return (
            <form onSubmit={this.sendForm}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.name}
                        onChange={this.handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your address"
                        value={this.state.address}
                        onChange={this.handleAddress}
                    />
                </div>
                <button type="submit">send</button>
            </form>
        )
    }

    renderMessage = () => {
        return <div>Dear,{this.state.name},thanks for you order!</div>
    }

    render() {
        console.log(this.state)
        return (
            <>
                <h1>Checkout </h1>
                {this.state.isOrderSend !== true
                    ? this.renderForm()
                    : this.renderMessage()}
            </>
        )
    }
}

export default CheckoutPage
