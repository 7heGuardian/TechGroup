import { useEffect, useState } from 'react'
import { db } from 'services/firebase'
import Head from 'next/head'
import PostPageLayout from 'layouts/PostPageLayout'
import { MetaDataPostPage, PostPageDescription, PostPageImageDescription } from 'layouts/PostPageLayout/styled'
import Link from 'next/link'

export default function PostItem() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    db
      .collection('wikiComments')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        console.log(snap)

        setComments(snap.docs.map(doc => {
          const id = doc.id
          const data = doc.data()
          const { createdAt } = data
          const date = new Date(createdAt.seconds * 1000)
          const normalizedCreatedAt = new Intl.DateTimeFormat('es-VE').format(date)

          return {
            ...data,
            id,
            createdAt: normalizedCreatedAt
          }
        }))
      })
  }, [])

  return (
    <>
      <Head>
        <title>Elaboración de una wiki - Technogroup.</title>
      </Head>

      <PostPageLayout comments={comments}>
        <h1 style={{ textAlign: 'center', fontSize: '28px' }}>Elaboración de una wiki</h1> <small><Link href='/'><a>Ir al inicio</a></Link></small>
        <MetaDataPostPage>Meta Description</MetaDataPostPage>
        <PostPageDescription>
          <p>
            Una wiki es un sitio web cuyas páginas pueden ser editadas por múltiples voluntarios
            a través del navegador web. Los usuarios pueden crear, modificar y borrar un mismo
            texto que comparten.
          </p>
          <br />
          <p>
            El término wiki (palabra que proviene del hawaiano wiki, «rápido») alude al nombre que
            recibe una comunidad virtual, cuyas páginas son editadas directamente desde el navegador, donde
            los mismos usuarios crean, modifican, corrigen o eliminan contenidos que, habitualmente,
            comparten.
          </p>
          <br />
          <p>
            Los textos o «páginas wiki» tienen títulos únicos. Si se escribe el título de una «página wiki»
            en algún lugar del wiki entre dobles corchetes ([[...]]), esta palabra se convierte en un «enlace
            web» a la página wiki. En una página sobre «alpinismo», por ejemplo, puede haber una palabra
            como «piolet» o «brújula» que esté marcada como palabra perteneciente a un título de página
            wiki. La mayor parte de las implementaciones de wikis indican en el URL de la página el propio
            título de la página wiki (en Wikipedia ocurre así: http://es.wikipedia.org/wiki/Alpinismo),
            facilitando el uso y comprensibilidad del link fuera del propio sitio web. Además, esto permite
            formar en muchas ocasiones una coherencia terminológica, generando una ordenación natural del
            contenido.
          </p>
          <br />
          <p>
            La aplicación de mayor peso y a la que le debe su mayor fama hasta el momento ha sido la
            creación de enciclopedias colectivas, género al que pertenece la Wikipedia. Existen muchas otras
            aplicaciones más cercanas a la coordinación de informaciones y acciones, o la puesta en común
            de conocimientos o textos dentro de grupos.
          </p>
          <br />
          <p>
            La mayor parte de los wikis actuales conservan un historial de cambios que permite recuperar
            fácilmente cualquier estado anterior y ver qué usuario hizo cada cambio, lo cual facilita
            enormemente el mantenimiento conjunto y el control de usuarios nocivos. Habitualmente, sin
            necesidad de una revisión previa, se actualiza el contenido que muestra la página wiki editada.
          </p>
          <br />
          <br />
          <h3>Historia</h3>
          <br />
          <p>
            El origen de los Wikis está en la comunidad de patrones de diseño cuyos integrantes los
            utilizaron para escribir patrones de programación. El primer WikiWikiWeb, fue creado por Ward
            Cunningham, quien inventó y dio nombre al concepto wiki y produjo la primera implementación
            de un servidor WikiWiki para el repositorio de patrones del Portland en 1995, es decir que un
            Wiki, es la base de datos en línea más simple que pueda funcionar y la más grande que existe en
            la actualidad ya que es la versión en inglés de Wikipedia, seguida por varias otras versiones del
            proyecto.
          </p>
          <br />
          <p>
            En la actualidad, contiene más de 2 millones y medio de artículos en inglés y más de 380.000
            artículos en español. El éxito de este proyecto provocó que para agilizar la creación de artículos
            se crease un wiki (sitio web que permite la edición de páginas desde el ordenador), pero lo que
            inicialmente era una ayuda terminó convirtiéndose en un proyecto.
          </p>
          <br />
          <p>
            El nombre Wikipedia surgió como contracción de los términos wiki (en alusión a la tecnología
            que le dio carta de naturaleza y a su vez, procede del hawaiano wikiwiki, rápido) y
            encyclopaedia. Aunque sus contenidos son frecuentemente objeto de discusión, Wikipedia es uno
            de los recursos informativos más usados en nuestros días.
          </p>
          <br />
          <br />
          <h3>Características</h3>
          <br />
          <p>
            <ul>
              <li>
                Permite la creación colectiva de documentos en un lenguaje simple de marcas utilizando
                un navegador web.
                </li>
              <li>
                Generalmente, no se hacen revisiones previas antes de aceptar las
                modificaciones, y la mayoría de los wikis están abiertos.
                </li>
              <li>
                Permite a los participantes trabajar juntos en páginas web para añadir o modificar su
                contenido. Las versiones antiguas nunca se eliminan y pueden restaurarse.
                </li>
              <li>
                Se puede seleccionar diferentes tipos de Wiki: Profesor, grupo, alumno.
                </li>
              <li>
                Se puede importar inicialmente desde el formato HTML.
                </li>
              <li>
                No tiene por qué ser necesariamente un sitio en la web, puesto que hay wikis instalables
                para uso en el escritorio de un computador personal o que pueden portarse en un llavero
                USB que lleven un entorno LAMP como, por ejemplo, XAMPP.
                </li>
              <li>
                Una wiki también puede ser un espacio usado para seguimiento individual de los
                alumnos, donde ellos puedan crear sus proyectos independientemente y el profesor pueda
                intervenir guiando y
                corrigiendo.
                </li>
              <li>
                Las wikis son un auténtico medio de hipertexto, con estructuras de navegación no lineal.
                </li>
              <li>
                Cada página contiene un gran número de vínculos a otras páginas.
                </li>
            </ul>
          </p>
          <br />
          <br />
          <h3>Tipos de Wiki</h3>
          <br />
          <p>
            A pesar de encontrar una gran variedad de contenido en las wikis o incluso contenido muy
            específico, todas estas se encuentran dentro de uno de los siguientes tipos de wiki:
          </p>
          <br />
          <ul>
            <li>
              Wikis privadas
              Las wikis privadas, tienen un acceso más restringido y solo esta disponible para
              usuarios registrados, todo el contenido de esta wiki solo puede ser visitado y editado por
              estos usuarios, muchas veces este tipo de wikis posee algún tipo de plan/suscripción, ya
              que es posible remunerar el contenido escrito.
            </li>
            <li>
              Wikis protegidas
              Las wikis protegidas, tienen la característica de que el contenido publicado pueden ser
              visitado de manera pública, y a diferencia de las wikis privadas estas poseen un registro
              gratuito, con este registro podrás hacerte miembro de la wiki y de esta manera tener
              acceso a la modificación de artículos, pero es obligatorio introducir fuentes registradas,
              ya que este tipo de wikis suelen ser más estrictos con la veracidad de su contenido.
            </li>
            <li>
              Wikis públicas
              Las wikis públicas, pueden ser vistas y editadas por todo el mundo. Más por lo general
              un usuario anónimo no puede crear una nueva página ni puede subir un archivo, si
              intenta hacerlo se le pide que se dé de alta como usuario del sitio donde está alojada la
              wiki, una vez dado de alta e identificado se le permite hacer modificaciones sin
              necesidad de ser invitado a formar parte del wiki por parte del administrador del mismo.
            </li>
          </ul>
          <br />
          <p>
            Teniendo en cuenta el alcance de cada tipo de wiki, podemos adentrarnos en estos mismos y
            abrir paso a las categorías que poseen las wikis, y podemos ver que estas poseen:
          </p>
          <br />
          <ul>
            <li>
              Wikis educativas: https://es.wikiversity.org
            </li>
            <li>
              Wikis de biologia: https://es.wikiversity.org
            </li>
            <li>
              Wikis de turismo: https://es.wikiversity.org
            </li>
            <li>
              Wikis de noticia: https://es.wikinews.org
            </li>
            <li>
              Wikis de libros: https://es.wikibooks.org/
            </li>
            <li>
              Entre otras…
            </li>
          </ul>
          <br />
          <p>

          </p>
          <br />
          <p>

          </p>
          <br />
          <p>
          </p>
          <PostPageImageDescription>

          </PostPageImageDescription>
          <br />
          <br />
          <h3 style={{ fontSize: '20px' }}>Subtitulo 2</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi.
          </p>
        </PostPageDescription>
        <br />
        <hr style={{ width: '80%' }} />
      </PostPageLayout>
    </>
  )
}
