import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Card(){
    return(
        <View style={styles.container}>
                
            <View style={styles.card}>
                <Image
                    source={{uri:'https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Iron_Man_poster.jpg/250px-Iron_Man_poster.jpg'}}
                    style={styles.img}
                    />
                <Text style={styles.texto}>
                    O gênio, bilionário, playboy e filantropo Tony Stark, que herdou do seu pai o empreiteiro de defesa Indústrias Stark.
                </Text>
            </View>
            <View style={styles.inline}>
                <View style={styles.cardT}>
                    <Text style={styles.titulo}>Sinopse</Text>
                    <Text styles={styles.textoA}>
                        Stark e Yinsen silenciosamente constroem um poderoso gerador elétrico chamado "reator arc" para dar energia ao eletroímã de Stark e um poderoso traje de armadura para ajudar na sua fuga. Os terroristas desconfiam já que eles estão demorando mais que o previsto; ao entrar na caverna e conversar com os dois, um dos líderes fica desapontado, já que deixou Yinsen viver com a condição de auxiliar Stark a construir o Jericho, mas ele sabe que eles não estão o construindo pelo fato de estarem demorando demais. Para salvar a vida de Yinsen, que estava sendo torturado para contar a verdade, Stark dá a possibilidade de ter uma data de entrega e o líder acaba dando até o dia seguinte para terminar o Jericho.
                    </Text>
                </View>
                <View style={styles.cardT}>
                    <Text style={styles.titulo}>Pré-Produção</Text>
                    <Text styles={styles.textoA}>Jon Favreau foi contratado para dirigir o filme em abril de 2006. Ele queria trabalhar novamente com o produtor da Marvel, Avi Arad, depois que ambos trabalharam em Demolidor, onde Favreau fez parte do elenco. O diretor encontrou a oportunidade de criar um "filme de espionagem" politicamente ambicioso em Homem de Ferro, citando influências de Tom Clancy, James Bond e RoboCop, e comparou sua abordagem a um filme independente. Favreau queria fazer de Homem de Ferro uma história de um homem adulto literalmente se reinventando depois de descobrir que o mundo é muito mais complexo do que ele originalmente acreditava.</Text>
                </View>
                <View style={styles.cardT}>
                    <Text style={styles.titulo}>Desenvolvimento</Text>
                    <Text styles={styles.textoA}>Em abril de 1990, a Universal Studios comprou os direitos de desenvolver Homem de Ferro para a tela grande, com Stuart Gordon para dirigir um filme de baixo orçamento baseado no personagem. Em fevereiro de 1996, a 20th Century Fox havia adquirido os direitos da Universal. Em janeiro de 1997, Nicolas Cage manifestou interesse em interpretar o personagem, enquanto em setembro de 1998, Tom Cruise expressou interesse em produzir e estrelar um filme do Homem de Ferro. Jeff Vintar e o co-criador do Homem de Ferro, Stan Lee, co-escreveram uma história para a Fox, que Vintar adaptou para um roteiro. Ele incluiu uma nova origem de ficção científica para o personagem, e apresentou MODOK como o vilão. Tom Rothman, presidente de produção da Fox, creditou o roteiro de finalmente fazê-lo entender o personagem. Em maio de 1999, Jeffrey Caine foi contratado para reescrever o roteiro de Vintar e Lee.</Text>
                </View>
            </View>
        </View>
    );
}