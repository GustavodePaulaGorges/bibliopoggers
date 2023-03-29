import { Component } from "react";
import { Text, Button, StyleSheet, View, TextInput } from 'react-native';

export default class Counter extends Component {
    state = {
        count: 1,
        step: 1,
    }
    incrementar() {
        this.setState({
            count: this.state.count + this.state.step
        })
    }
    reduzir() {
        if (this.state.count > this.props.min || this.props.min == undefined) {
            this.setState({
                count: this.state.count - 1
            })
        
        }
    }
    render() {
        return (
            <View style={styles.contador}>
                <Text style={{}}>Quantidade: {this.state.count}  </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Button onPress={() => this.incrementar()} title="+" />
                  <Button onPress={() => this.reduzir()} title="-" />
                </View>
            </View>
        )
            
        }
}
const styles = StyleSheet.create({
    contador : {
        padding: 2,
        flexDirection: 'col',
        alignItems: 'center',
    }
}
    
)