import './Head.css';
export default function Head({img, img2, img3}){
    return(
        <div className='Head'>
            <h1>O melhor e-book de Hipertrofia !</h1>
             <p>Transforme seu Treino e Alcance a Hipertrofia dos Seus Sonhos!

Você já imaginou conquistar o físico dos seus sonhos, <span className='Cor'>ganhar massa muscular de forma eficiente e segura, sem perder tempo com métodos ineficazes?</span> Apresentamos o [Nome do Ebook], o guia completo que vai revolucionar sua rotina de treinos e alimentação!</p>
<br/>
<img width={400} src={img} alt=""></img>
<p>Neste ebook, você terá acesso a:
✅ Estratégias comprovadas para maximizar o ganho de massa muscular.
✅ Dicas de nutrição que potencializam a hipertrofia.
✅ Um plano de treino simples e eficaz, adaptado para diferentes níveis de experiência.
✅ Segredos de recuperação muscular para evitar lesões e manter o desempenho.</p><img width={400} src={img2} alt=""></img><br/>
<p><span className='Cor'>Escrito por especialistas no assunto, este material foi desenvolvido para quem deseja resultados reais e duradouros.</span> Seja você iniciante ou já experiente, o [Nome do Ebook] é o atalho para alcançar seus objetivos de maneira inteligente e prática.

Por que esperar? Invista no seu corpo e na sua saúde hoje mesmo! 💪

📥 Clique no botão abaixo e comece sua transformação agora!</p><img width={400} src={img3} alt=""></img>

        </div>
    )
}