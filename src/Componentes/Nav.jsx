import './Nav.css'
export default function Nav(){
    return(
        <div className='Nav'>
           <h2>Garanta já o e-book por apenas <span className='valor'>$1,99</span>!</h2>
           <p>CLIQUE JÁ NO BOTÃO DO WHATSAPP PARA TER ACESSO AO MEIO DE PAGAMENTO VIA PIX</p>
           <span><i class="bi bi-arrow-down-circle-fill Flecha"></i></span>
           <div className='BotaoPix'>
           <button onClick={()=>{botaoWhatsapp()}}><i class="bi bi-whatsapp whatsapp"></i></button>
           <h3>PIX</h3>
           </div>
           <p className='Receba'>RECEBA DIRETO NO WHATSAPP</p>
        </div>
    )

    function botaoWhatsapp(){
        window.location="https://techouseofc.pay.yampi.com.br/r/MRYBDDHPFP"
    }
}