import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
`;

export const Form = styled.View`
    margin-top: 5%;
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor:'#999'
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #28FA7D;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => props.loading ? 0.7 : 1};
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const User = styled.View`
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    flex: 0.5;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 18px;
    color: #28FA7D;
    font-weight: bolder;
    margin-top: 4px;
   
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    color: #fff;

`;
// Cor do Background, 
export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 5px;
    background: #28FA7D;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
`;

export const Stars = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const OwnerAvatar = styled.Image`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    background: #eee;
`;

export const Info = styled.View`
    margin-left: 10px;
    flex: 1;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 15px;
    font-weight: bold;
    color: #333;
`;

export const Header = styled.View` 
    height: 50%;
    align-items: center;
    justify-content: center;
`;

export const Avatarperfil = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    background: #eee;
`;

export const Nameperfil = styled.Text`
    font-size: 36px;
    color: #fff;
    text-align: center;
    font-weigth: bolder

`;

export const Description = styled.Text`
    font-size: 12px;
    color: #fde834ff;
`;

export const Bioperfil = styled.Text`
    font-size: 15px;
    color: #e6e381;
    text-align: center;
    font-weigth: bolder
`;