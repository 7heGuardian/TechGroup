import HeaderPostPage from "components/HeaderPostPage"
import { useState } from "react"
import { db } from "services/firebase"
import firebase from 'firebase/app'
import { BgHeaderPostPage } from "./styled"
import SendCommentPost from "components/SendCommetPost"
import ListCommentsPost from "components/ListCommentsPost"

export default function PostPageLayout({ children, comments }) {
  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    db.collection('wikiComments').add({
      text: input,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    })

    setInput('')
  }

  return (
    <>
      <BgHeaderPostPage />
      <HeaderPostPage />

      <main style={{ marginTop: '50px', width: '100%', height: '100%' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {children}

          <section style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <SendCommentPost
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
            />
            <ListCommentsPost comments={comments} />
          </section>

          <section style={{ marginTop: '50px', display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <article style={{ padding: '10px', textAlign: 'center', backgroundColor: '#eee', width: '250px', height: '300px', borderRadius: '10px' }}>
              <figure style={{ backgroundColor: '#a5a5a5', height: '100px', width: '100px', margin: '20px auto', borderRadius: '100%' }}></figure>
              <h4 style={{ fontSize: '20px' }}>TechGroup</h4>
              <small style={{ fontSize: '13px' }}>SomeThing</small>
              <p style={{ fontSize: '16px', marginTop: '20px' }}>
                Consectetur adipiscing elit. Curabitur porta eget neque at iaculis. Vestibulum velit ligula, pharetra sed mi.
              </p>
            </article>
          </section>
        </div>
      </main>

    </>
  )
}
