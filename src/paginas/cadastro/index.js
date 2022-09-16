import { Text,View } from "react-native";
import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native';

export default function Cadastrar(){

    return(

        <View>
             
             <center>
             <Text style={{fontSize:20,fontWeight:'bold',}}> CADASTRO DE ALUNOS  </Text>
            <form>
                <label>
                    Nome:
                    {'\n'}
                    <input type="text" name="name" />
                </label>
                <br /> <br />
                <label>
                    Idade:
                    {'\n'}
                    <input type="text" idade="idade" />
                </label>
                <br /> <br />
                <label>
                    Nota 1:
                    {'\n'}
                    <input type="number" nota="nota1" />
                </label>
                <br /> <br />
                <label>
                    Nota 2:
                    {'\n'}
                    <input type="number" nota="nota2" />
                </label>
                <br /> <br />
                <label>
                    Nota 3:
                    {'\n'}
                    <input type="number" nota="nota3" />
                </label>
                 
                <br /> <br />
                <label>
                <input type="submit" value="Enviar" />
                </label>
            </form>
            </center>
        </View>
    );

}

const styles = StyleSheet.create({
      container: {
      flex: 1,
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#F0F8FF'
    },