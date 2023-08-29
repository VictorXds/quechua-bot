const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const frasesquechua = [{
    quechua: 'Qosqo hatun llaqta, teqsi muyuq pupun.',
    traduccion: 'Cusco sagrado ombligo del mundo',
    prioridad: '4'
}, {
    quechua: 'Machupikchu inkakunaq pukaran',
    traduccion: 'Machupicchu fortaleza inka',
    prioridad: '4'
}, {
    quechua: 'Inti tayta Inka llaqta yupaychanan',
    traduccion: 'Padre sol, adoración Inka',
    prioridad: '4'
}, {
    quechua: 'Niway piwanmi purinki, noqa nisayki pin kanki.',
    traduccion: 'Dime con quién andas y te diré quién eres',
    prioridad:'2'
}, {
    quechua: 'Aman hananman thoqaychu, uyaykimanmi kutiramusunkiman',
    traduccion: 'No escupas al cielo, puede volver a tu cara',
    prioridad: '1'
}, {
    quechua: "Sanp'a sanp'allamanta puriy, karumanmi chayanki",
    traduccion: 'Avanza lentamente y llegarás lejos',
    prioridad: '1'
}, {
  quechua: "Wakin Uywakunaqa Qumuspalla Kanku",
  traduccion: 'Algunos animales siempre están cabeza abajo',
  prioridad: '2'
}, {
  quechua: "Hatun K’ankaqa Makaytanmunan",
  traduccion: 'El gallo grande siempre quiere pegar',
  prioridad: '1'
}, {
  quechua: "Hatun Mallki Manan Wañunmanchu",
  traduccion: 'El árbol grande no podrá morir',
  prioridad: '1'
}, {
  quechua: "Kunan P’unchauqa Kausarisunchis ",
  traduccion: 'Este día viviremos',
  prioridad: '2'
}, ]

function obtenerFrase(tipo) {
    const frasesOrdenadas = frasesquechua.sort((a, b) => a.prioridad - b.prioridad);
    if (tipo === "frase") {
      return frasesOrdenadas.map(frase => frase.quechua);
    } else if (tipo === "traduccion") {
      return frasesOrdenadas.map(frase => frase.traduccion);
     } else {
      return null; 
    }
  }



const flowTermino= addKeyword(["👉 *Siguiente*", "👉 Siguiente", "Siguiente"]).addAnswer('El programa esta todavia en una version *beta*, estaremos actualizando las frases en quechua. Gracias')

const flowSiguiente9 = addKeyword(["👉 *Siguiente*", "👉 Siguiente", "Siguiente"]).addAnswer(' ', {media:'https://i.imgur.com/f75W20K.png'})
  .addAnswer(["*Frase* : " + obtenerFrase("frase")[9], " ", "*Traduccion* : " + obtenerFrase("traduccion")[9]], null)
  .addAnswer('Recuerda escribir 👉 *Siguiente* para recibir la proxima frase', null, null, flowTermino)

const flowSiguiente8 = addKeyword(["👉 *Siguiente*", "👉 Siguiente", "Siguiente"]).addAnswer(' ', {media:'https://i.imgur.com/08dObdg.png'})
  .addAnswer(["*Frase* : " + obtenerFrase("frase")[8], " ", "*Traduccion* : " + obtenerFrase("traduccion")[8]], null)
  .addAnswer('Recuerda escribir 👉 *Siguiente* para recibir la proxima frase', null, null, flowSiguiente9)

const flowSiguiente7 = addKeyword(["👉 *Siguiente*", "👉 Siguiente", "Siguiente"]).addAnswer(' ', {media:'https://i.imgur.com/zf7McO6.png'})
  .addAnswer(["*Frase* : " + obtenerFrase("frase")[7], " ", "*Traduccion* : " + obtenerFrase("traduccion")[7]], null)
  .addAnswer('Recuerda escribir 👉 *Siguiente* para recibir la proxima frase', null, null, flowSiguiente8)

const flowSiguiente6 = addKeyword(["👉 *Siguiente*", "👉 Siguiente", "Siguiente"]).addAnswer(' ', {media:'https://i.imgur.com/K8gScOB.png'})
  .addAnswer(["*Frase* : " + obtenerFrase("frase")[6], " ", "*Traduccion* : " + obtenerFrase("traduccion")[6]], null)
  .addAnswer('Recuerda escribir 👉 *Siguiente* para recibir la proxima frase', null, null, flowSiguiente7)
const flowSiguiente5 = addKeyword(["👉 *Siguiente*", "👉 Siguiente", "Siguiente"]).addAnswer(' ', {media:'https://i.imgur.com/nlbsSVF.png'})
  .addAnswer(["*Frase* : " + obtenerFrase("frase")[5], " ", "*Traduccion* : " + obtenerFrase("traduccion")[5]], null)
  .addAnswer('Recuerda escribir 👉 *Siguiente* para recibir la proxima frase', null, null, flowSiguiente6)

const flowSiguiente4 = addKeyword(["👉 *Siguiente*", "👉 Siguiente", "Siguiente"]).addAnswer(' ', {media:'https://i.imgur.com/Nnwg6gu.png'})
  .addAnswer(["*Frase* : " + obtenerFrase("frase")[4], " ", "*Traduccion* : " + obtenerFrase("traduccion")[4]], null)
  .addAnswer('Recuerda escribir 👉 *Siguiente* para recibir la proxima frase', null, null, flowSiguiente5)

const flowSiguiente3 = addKeyword(["👉 *Siguiente*", "👉 Siguiente", "Siguiente"]).addAnswer(' ', {media:'https://i.imgur.com/7vErbR9.png'})
  .addAnswer(["*Frase* : " + obtenerFrase("frase")[3], " ", "*Traduccion* : " + obtenerFrase("traduccion")[3]], null)
  .addAnswer('Recuerda escribir 👉 *Siguiente* para recibir la proxima frase', null, null, flowSiguiente4)

const flowSiguiente2 = addKeyword(["👉 *Siguiente*", "👉 Siguiente", "Siguiente"]).addAnswer(' ', {media:'https://i.imgur.com/6YDC5bV.png'})
  .addAnswer(["*Frase* : " + obtenerFrase("frase")[2], " ", "*Traduccion* : " + obtenerFrase("traduccion")[2]], null)
  .addAnswer('Recuerda escribir 👉 *Siguiente* para recibir la proxima frase', null, null, flowSiguiente3)


const flowSiguiente = addKeyword(["👉 *Siguiente*", "👉 Siguiente", "Siguiente"]).addAnswer(' ', {media:'https://i.imgur.com/8fy7MKK.png'})
    .addAnswer(["*Frase* : " + obtenerFrase("frase")[1], " ", "*Traduccion* : " + obtenerFrase("traduccion")[1]], null)
    .addAnswer('Recuerda escribir 👉 *Siguiente* para recibir la proxima frase', null, null, flowSiguiente2)



const flowDenego = addKeyword(['👉 No', 'no', 'no gracias']).addAnswer(
    ['Sin problema, si deseas puedes compartir este número con tus contactos']
)




const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('🙌 Hola bienvenido a *QUECHUA AL MUNDO*')
    .addAnswer(' ', {media:'https://i.imgur.com/MwZhpSN.png'})
    .addAnswer(["*Frase* : " + obtenerFrase("frase")[0], " ", "*Traduccion* : " + obtenerFrase("traduccion")[0]], null)
    .addAnswer('Escribe 👉 *Siguiente* para recibir la proxima frase', null, null, [flowDenego, flowSiguiente])



const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
