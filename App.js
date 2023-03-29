import { Image, Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import Counter from './src/components/counter';


function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={{ resizeMode: 'stretch', height: 200 }} source={{ uri: props.livro.capa }} />
      <View style={{ width: '100%', alignContent: 'center', textAlign: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{props.livro.titulo}</Text>
        <Text>R$ {props.livro.preco}</Text>
      </View>
      <Counter min="0" />
    </View>
  )
}

export default function App() {


  const livros = [
    {
      capa: "https://marketplace.canva.com/EAFB57USaGs/1/0/1003w/canva-yellow-modern-the-mind-of-a-leader-book-cover-Qn8LzOLGCXM.jpg",
      titulo: 'The mind of a leader',
      preco: 25.00
    },
    {
      capa: "https://images-americanas.b2w.io/produtos/111158011/imagens/livro-o-codificador-limpo-um-codigo-de-conduta-para-programadores-profissionais/111158011_1_xlarge.jpg",
      titulo: 'O codificador limpo',
      preco: 30.00
    },
    {
      capa: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg",
      titulo: 'The mind of a leader (Collectors edition)',
      preco: 21.00
    },
    {
      capa: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198",
      titulo: 'The book of art',
      preco: 22.00
    },
    {
      capa: "https://ludis.com.br/wp-content/uploads/2020/05/book-img2.jpg",
      titulo: 'Think outside the box',
      preco: 22.00
    },
    {
      capa: "https://www.adobe.com/express/create/cover/media_178ebed46ae02d6f3284c7886e9b28c5bb9046a02.jpeg?width=400&format=jpeg&optimize=medium",
      titulo: 'Lunar Storm',
      preco: 22.00
    },
  ]
  return (
    <ScrollView>
      <Text style={styles.titulo}>Livros  </Text>
      <View style={styles.conteudo}>
        {
          livros.map(livro => <Card livro={livro} />)
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingTop: 10,
    marginTop: 40,
    backgroundColor: '#',
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f5fcff',
    paddingTop: 20,
    justifyContent: 'space-between',
    width: '100%'
  },
  card: {
    overflow: 'hidden',
    width: '40%',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    padding: 6,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderWidth: 2,
    borderColor: '#ccc'
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#1AA7EC',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5
  }

})