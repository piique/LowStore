import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        title: "Login",
    };

    state = { email: '', password: '', error: '' };

    render() {
        return (
            <View style={styles.backgroudContainer}>
                <View>
                    <TextInput
                        placeholder='Seu email'
                        value={this.state.email}
                        onChangeText={this.changeEmail}/>
                </View>
                <View>
                    <TextInput
                        secureTextEntry={true} 
                        placeholder='Sua senha'
                        value={this.state.password}
                        onChangeText={this.changePassword}/>
                </View>
                {this.state.error.length !== 0 && <Text>{this.state.error}</Text>}
                <TouchableOpacity 
                    onPress={this.loginPress} 
                    style={styles.prodButton}>
                    <Text>Acessar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    changeEmail = (email) => {
        this.setState({email});
    } 

    changePassword = (password) => {
        this.setState({password});
    }

    loginPress = async () => {
        if (this.state.email.length === 0 || this.state.password.length === 0) {
            this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
        } else {
            try {                  
                this.setState({ error: 'Logado' });
            } catch (_err) {
                console.log(_err);
                this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
            }
        }
    }
}

const styles = StyleSheet.create({
    backgroudContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignContent: 'center'
    },
    prodButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#be5080',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'transparent'
    }
});