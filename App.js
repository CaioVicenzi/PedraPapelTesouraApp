import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [escolha, setEscolha] = useState('')
  const [resultado, setResultado] = useState('')
  const [escolhaAdversario, setEscolhaAdversario] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, papel, ou tesoura!</Text>


      <View style={styles.hStack}>
        <Text style={styles.botaoOpcao} onPress={escolherPedra}>🪨</Text>
        <Text style={styles.botaoOpcao} onPress={escolherPapel}>📃</Text>
        <Text style={styles.botaoOpcao} onPress={escolherTesoura}>✂️</Text>
      </View>

      { escolha != '' ? (
        <Text>{`Você escolheu ${escolha }`}</Text>
      ) : null

      }

      {
        escolhaAdversario != '' ? (
          <View>
            <Text>{`Adversário escolheu: ${escolhaAdversario }`}</Text>
            <Text>{`Resultado: ${resultado }`}</Text>
            <Button title='Limpar' onPress={limpar}></Button>
          </View>  
       ) : <Button title='jogar' onPress={jogar}></Button>
      }


      <StatusBar style="auto" />
    </View>
  );

  function escolherPedra () {
    setEscolha('🪨')
  }

  function escolherPapel () {
    setEscolha('📄')
  }

  function escolherTesoura () {
    setEscolha('✂️')
  }

  function limpar () {
    setEscolhaAdversario('')
    setEscolha('')
    setResultado('')
  }

  function jogar () {
    if (escolha != '') {

    const opcoes = ["🪨", "📄", "✂️"]
    const jogadaAdversario = opcoes[Math.floor(Math.random() * opcoes.length)]

    if (jogadaAdversario == escolha) {
      setResultado('Foi um empate')
    } else if (escolha == '🪨') {
      if (jogadaAdversario == '📄') {
        setResultado('Você perdeu...')
      } else {
        setResultado('Você ganhou!')
      }
    } else if (escolha == '📄') {
      if (jogadaAdversario == '✂️') {
        setResultado('Você perdeu...')
      } else {
        setResultado('Você ganhou!')
      }
    } else {
      if (jogadaAdversario == '🪨') {
        setResultado('Você perdeu...')
      } else {
        setResultado('Você ganhou!')
      }
    }

    setEscolhaAdversario(jogadaAdversario)
  } else {
    alert('Não escolheu nenhuma opção!')
  }

  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 30
  },
  hStack: {
    flexDirection: 'row'
  },

  botaoOpcao: {
    fontSize: 42,
    padding: 30
  }

});
