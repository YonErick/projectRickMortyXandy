import React, { Component } from 'react';
import api from '../services/api';
import { Container, Header, Avatarperfil, Nameperfil, Bioperfil, Stars, Starred, OwnerAvatar, Info, Title, Author } from './styles';
import { ImageBackground } from 'react-native';
const image = {uri: 'https://i.pinimg.com/originals/01/97/38/01973813faf7d7f4539e6296add2fd93.jpg'}
export default class Caracter extends Component {
    // state = {
    //     caracter: [],
    // };

    async componentDidMount(id) {
        const { route } = this.props;
        const { caracterId }  = route.params;
        const response = await api.get(`/caracter/${caracterId}`);

        this.setState({ caracter: response.data });
    }

    render() {
        const { route } = this.props;
        const { caracter } = route.params;
        //const { caracter } = this.state;

        return (
            <Container>
                <ImageBackground source={image} resizeMode="cover" style={{flex: 1,
                justifyContent: 'center'}}>

                <Header>
                    <Nameperfil>{caracter.name}</Nameperfil>
                    <Bioperfil>{caracter.species}</Bioperfil>
                    <Bioperfil>Location: {caracter.location}</Bioperfil>
                    <Bioperfil>Episode: {caracter.episode}</Bioperfil>
                    <Avatarperfil source={{ uri: caracter.avatar }} />
                </Header>
                <Header></Header>
                </ImageBackground>
            </Container>
        );
    }
}