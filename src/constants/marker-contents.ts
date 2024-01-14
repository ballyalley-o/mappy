const CONTENT = {
  company: (companyName: string, description: string) => {
    return `<html>
    <h1>User Name: ${companyName}</h1>
    <h3>Description: ${description}</h3>
    </html>`
  },

  user: (name: string) => {
    return `<html>
        <h1>User Name: ${name}</h1>
        </html>`
  },
}

export default CONTENT
