'use client'
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong! This is The global Error</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}