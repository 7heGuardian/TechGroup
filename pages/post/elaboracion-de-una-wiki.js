import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { db } from 'services/firebase'
import PostPageLayout from 'layouts/PostPageLayout'
import { MetaDataPostPage, PostPageDescription, PostPageImageContainer, PostPageImageDescription } from 'layouts/PostPageLayout/styled'

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
        <h1 style={{ textAlign: 'center', fontSize: '40px' }}>Elaboración de una wiki</h1>
        <MetaDataPostPage>
          <p>
            10/12/2020 | Por: Kevin Blanco, José García, José Pérez, Newman Sánchez y Josué Suárez
          </p>
        </MetaDataPostPage>
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

          <PostPageImageDescription>
            <PostPageImageContainer>
              <img src='/wiki-wiki.jpg' width='100%' height='100%' />
            </PostPageImageContainer>
            <div>
              <p>El Wiki Wiki Shuttle, en el aeropuerto internacional de Honolulu.</p>
            </div>
          </PostPageImageDescription>

          <p>
            Los textos o «páginas wiki» tienen títulos únicos. Si se escribe el título de una «página wiki»
            en algún lugar del wiki entre dobles corchetes ([[...]]), esta palabra se convierte en un «enlace
            web» a la página wiki. En una página sobre «alpinismo», por ejemplo, puede haber una palabra
            como «piolet» o «brújula» que esté marcada como palabra perteneciente a un título de página
            wiki. La mayor parte de las implementaciones de wikis indican en el URL de la página el propio
            título de la página wiki (en Wikipedia ocurre así: <a href='http://es.wikipedia.org/wiki/Alpinismo' target='_blank'>http://es.wikipedia.org/wiki/Alpinismo</a>),
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
          <h2>Historia</h2>
          <p>
            El origen de los Wikis está en la comunidad de patrones de diseño cuyos integrantes los
            utilizaron para escribir patrones de programación. El primer WikiWikiWeb, fue creado por Ward
            Cunningham, quien inventó y dio nombre al concepto wiki y produjo la primera implementación
            de un servidor WikiWiki para el repositorio de patrones del Portland en 1995, es decir que un
            Wiki, es la base de datos en línea más simple que pueda funcionar y la más grande que existe en
            la actualidad ya que es la versión en inglés de Wikipedia, seguida por varias otras versiones del
            proyecto.
          </p>

          <PostPageImageDescription>
            <PostPageImageContainer>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ward_Cunningham_-_Commons-1.jpg/560px-Ward_Cunningham_-_Commons-1.jpg' width='100%' height='100%' />
            </PostPageImageContainer>
            <div>
              <p>Ward Cunningham, el padre de las Wikis.</p>
            </div>
          </PostPageImageDescription>

          <p>
            En la actualidad, contiene más de 2 millones y medio de artículos en inglés y más de 380.000
            artículos en español. El éxito de este proyecto provocó que para agilizar la creación de artículos
            se crease un wiki (sitio web que permite la edición de páginas desde el ordenador), pero lo que
            inicialmente era una ayuda terminó convirtiéndose en un proyecto.
          </p>
          <p>
            El nombre Wikipedia surgió como contracción de los términos wiki (en alusión a la tecnología
            que le dio carta de naturaleza y a su vez, procede del hawaiano wikiwiki, rápido) y
            encyclopaedia. Aunque sus contenidos son frecuentemente objeto de discusión, Wikipedia es uno
            de los recursos informativos más usados en nuestros días.
          </p>
          <h2>Características</h2>
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
          <h2>Tipos de Wiki</h2>
          <p>
            A pesar de encontrar una gran variedad de contenido en las wikis o incluso contenido muy
            específico, todas estas se encuentran dentro de uno de los siguientes tipos de wiki:
          </p>
          <ul>
            <li>
              <b>Wikis privadas: </b>
              Las wikis privadas, tienen un acceso más restringido y solo esta disponible para
              usuarios registrados, todo el contenido de esta wiki solo puede ser visitado y editado por
              estos usuarios, muchas veces este tipo de wikis posee algún tipo de plan/suscripción, ya
              que es posible remunerar el contenido escrito.
            </li>
            <li>
              <b>Wikis protegidas: </b>
              Las wikis protegidas, tienen la característica de que el contenido publicado pueden ser
              visitado de manera pública, y a diferencia de las wikis privadas estas poseen un registro
              gratuito, con este registro podrás hacerte miembro de la wiki y de esta manera tener
              acceso a la modificación de artículos, pero es obligatorio introducir fuentes registradas,
              ya que este tipo de wikissss
               suelen ser más estrictos con la veracidad de su contenido.
            </li>
            <li>
              <b>Wikis públicas: </b>
              Las wikis públicas, pueden ser vistas y editadas por todo el mundo. Más por lo general
              un usuario anónimo no puede crear una nueva página ni puede subir un archivo, si
              intenta hacerlo se le pide que se dé de alta como usuario del sitio donde está alojada la
              wiki, una vez dado de alta e identificado se le permite hacer modificaciones sin
              necesidad de ser invitado a formar parte del wiki por parte del administrador del mismo.
            </li>
          </ul>
          <p>
            Teniendo en cuenta el alcance de cada tipo de wiki, podemos adentrarnos en estos mismos y
            abrir paso a las categorías que poseen las wikis, y podemos ver que estas poseen:
          </p>
          <ul>
            <li>
              Wikis educativas: <a href='https://es.wikiversity.org' target='_blank'>https://es.wikiversity.org</a>
            </li>
            <li>
              Wikis de biologia: <a href='https://es.wikiversity.org' target='_blank'>https://es.wikiversity.org</a>
            </li>
            <li>
              Wikis de turismo: <a href='https://es.wikiversity.org' target='_blank'>https://es.wikiversity.org</a>
            </li>
            <li>
              Wikis de noticia: <a href='https://es.wikiversity.org' target='_blank'>https://es.wikinews.org</a>
            </li>
            <li>
              Wikis de libros: <a href='https://es.wikibooks.org' target='_blank'>https://es.wikibooks.org</a>
            </li>
            <li>
              Entre otras…
            </li>
          </ul>
          <h2>Cómo crear una Wiki</h2>

          <PostPageImageDescription>
            <PostPageImageContainer>
              <img src='https://upload.wikimedia.org/wikipedia/commons/1/17/Google-sites-logo.png' width='100%' height='100%' />
            </PostPageImageContainer>
            <div>
              <p>Google Sites, un servicio gratuito que te facilita la creación de una Wiki.</p>
            </div>
          </PostPageImageDescription>

          <p>
            Un sitio de grupo es un wiki. Esto también es así para otros tipos de sitios. Por lo tanto, puede
            comenzar desde el sitio de su grupo o desde otro tipo de sitio y empezar a crear páginas wiki ahí
            mismo. En un sitio de grupo, cada página nueva se crea en la biblioteca de páginas del
            sitio. Si se prefiere administrar el wiki por separado, se puede crear una biblioteca de páginas de
            wiki. Al momento de crear una wiki el procedimiento puede variar, todo esto depende de los tipos
            de wiki y en donde la vamos a crear, sin embargo, los pasos a seguir suelen ser similares. Por
            ejemplo, para crear una wiki en Google Sites se deben seguir los siguientes pasos:
          </p>
          <ol>
            <li>
              Es necesario tener una cuenta en Google, si no se tiene se debe crear una. Esto es debido a
              que se nos pide un usuario y una contraseña.
            </li>
            <li>
              Una vez que dentro, aparece un botón que dice “Crear” a la izquierda de la pantalla.
              Debajo, aparecen dos opciones en un menú: Mis sitios y Sitios eliminados.
            </li>
            <li>
              Se pulsa el botón Crear.
            </li>
            <li>
              Luego se rellena el formulario introduciendo el nombre del sitio, una breve descripción,
              El sitio que se acaba de crear presenta una página a la que Google Sites denomina Página
              Principal.
            </li>
            <li>
              Ahora en la parte superior derecha y se encontraran tres botones que se usaran cuando se
              esté construyendo la página, son: el primero a la izquierda se utiliza para modificar la
              página, el siguiente para crear una página nueva y el botón Más, contiene todas las
              opciones para configurar la wiki.
            </li>
            <li>
              Si se pulsa sobre el botón Modificar la página se convierte en un documento en el que se
              puede escribir, borrar y utilizar diferentes opciones de formato como en cualquier
              procesador de textos. Esta primera página será el “Inicio” de la wiki.
            </li>
            <li>
              A continuación, se pulsa GUARDAR y el documento se convierte en una página web.
            </li>
          </ol>
          <p>
            Este es el procedimiento para ir una wiki. Son tres pasos: Modificar, escribir y Guardar.
            Este proceso y el de muchas otras wikis son similares, como SharePoint, wikidot, etc.
            Consistiendo en tener una cuenta del sitio principal (en este caso fue de Google), luego crear la
            base de la biblioteca o página, modificar, escribir y guardar. Las principales variantes serian las
            formas de editar y la variedad de herramientas disponibles para optimizar o personalizar el sitio
            creado, todo según el tipo de wiki usada.
          </p>
          <h2>Software para la creación de una Wiki</h2>
          <p>
            Las herramientas de software para wikis son una forma de software colaborativo para soporte
            de los Wikis. Usualmente se implementan vía la interfaz CGI de los servidores web. Un Wiki es
            un sitio que permite leer, editar y crear páginas que al final son visualizadas en formato HTML.
          </p>
          <ul>
            <li>
              <b>MediaWiki: </b>Paquete de software wiki gratuito escrito en PHP, originalmente hecho para
              usarse en Wikipedia.
            </li>
            <li>
              <b>JSPWiki: </b>Motor Wiki de propiedades ricas y expandible construido en base a los
              componentes estándares J2EE (Java, servlets, JSP).
            </li>
            <li>
              <b>MoinMoin: </b>Motor Wiki avanzado bastante fácil de utilizar, escrito en Python con una
              gran comunidad de usuarios.
            </li>
            <li>
              <b>PmWiki: </b>Sistema basado en wiki para la creación colaborativa y el mantenimiento de
              sitios web.
            </li>
            <li>
              <b>TikiWiki: </b>Se trata de una solución Groupware/CMS (Content Management System), es
              decir, un sistema de administración de contenido.
            </li>
            <li>
              <b>DokuWiki: </b>Un Wiki dócil, fácil de utilizar, orientado más que nada a la creación de
              documentación de cualquier tipo.
            </li>
            <li>
              <b>Xwiki: </b>Wiki de empresa, con muchas propiedades que se necesitan para el uso
              professional. Es también una aplicación Wiki que permite la creación de aplicaciones
              (incluyendo información estructurada y scripting) dentro de la interface Wiki. Se pueden
              utilizar los lenguajes Velocity y Groovy.
            </li>
            <li>
              <b>WikkaWiki: </b>Motor Wiki flexible, dócil, estándar y de peso liviano escrito en PHP, que
              utiliza MySQL para almacenar páginas. Elaborado en base a WakkaWikki, está diseñado
              para tener velocidad, extensibilidad y seguridad.
            </li>
          </ul>
          <h2>Ventajas y desventajas de una Wiki</h2>
          <h3><b>Ventajas</b></h3>
          <ul>
            <li>
              Flexibilidad de crear y mejorar páginas y/o articulos de forma instantánea, dando una gran
              libertad al usuario. Esto hace que más gente participe en su edición, a diferencia de los
              sistemas tradicionales, donde resulta más difícil que los usuarios del sitio contribuyan a
              mejorarlo.
            </li>
            <li>
              Mapeo profundo de artículos/temas/páginas, esto quiere decir que podemos navegar entre
              distintos conceptos y artículos situados en una sola página.
            </li>
            <li>
              Puede tomarse como repositorio de archivos e investigaciones.
            </li>
            <li>
              Permite un trabajo asincrónico, esto quiere decir que pueden ocurrir varias acciones al
              mismo tiempo.
            </li>
            <li>
              Dependiendo de la wiki, esta misma se encargará de tener contenido actualizado, en otro
              caso la misma comunidad o editores seleccionados se hará cargo de ello.
            </li>
            <li>
              Favorece la revisión del trabajo, a medida que se va realizando.
            </li>
            <li>
              Por lo general las wikis poseen tienen un control de cambios, de esta manera nada se
              pierde, y siempre se puede recuperar la información.
            </li>
            <li>
              Sistema de búsqueda para temas o artículos que a veces son difíciles de encontrar en
              palabras simples.
            </li>
            <li>
              Incrementa la motivación de los alumnos, al trabajar en grupo y con las nuevas
              tecnologías, ya que rompe la rutina del trabajo y la investigación tradicional.
            </li>
            <li>
              Son sistemas simples, abren camino la promoción online y permiten redefinir conceptos.
            </li>
            <li>
              Las wikis son económicas y dependiendo de la wiki puede llegar a ser un excelente medio
              educativo.
            </li>
            <li>
              Las wikis pueden ser multilingües, pudiéndose escribir en el idioma preferido por cada
              participante.
            </li>
          </ul>
          <h3><b>Desventajas</b></h3>
          <ul>
            <li>
              A Pesar de que hoy en día hay una mejor filtración de datos y verificación de contenido, a
              veces las wikis (en especial las públicas) suelen tener contenido que no es consistente en
              su información o contenido vandalizado.
            </li>
            <li>
              Puede introducirse material que viola los derechos de autoría.
            </li>
            <li>
              Se halla el vandalismo que borra información importante, se reemplazan artículos por
              obscenidades, racismos y se ingresa material que viola los derechos de autor.
            </li>
            <li>
              A veces en los wiki conceptuales, se pierde el objetivo estricto de la colaboración.
            </li>
          </ul>
          <p>
            Podemos concluir con respecto a este tema, que la wiki puede ser editada por diversos
            usuarios lo que hace una potente herramienta para compartir información entre muchas personas,
            ya que tiene un gran potencial educativo, por lo que puede ser usada en muchas ocasiones por los
            docentes y estudiantes. Es decir, que esta herramienta aplicada correctamente, se puede convertir
            en un excelente recurso para diferentes áreas y temas tecnológicos.
          </p>
          <p>
            Las wikis son novedosas, por tal razón permiten que cada aprendizaje pueda ser tomado en
            cuenta durante el proceso de enseñanza, además de que posee la facilidad de lograr que los
            contenidos puedan ser visualizados y estudiados de una forma que se hace más sencillo poder
            encontrarlos y accesar a estos para realizar verificaciones y reforzar aun en gran medida estos
            aprendizajes dados.
          </p>
        </PostPageDescription>
        <br />
        <hr style={{ width: '100%' }} />
      </PostPageLayout>
    </>
  )
}
