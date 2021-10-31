import Axios from 'axios'

export const definingBookFormat = (format) => {
  switch (format) {
    case 'pdf':
      return 'pdf'
    case 'epub':
      return 'epub+zip'
    case 'doc':
      return 'msword'
    case 'fb2':
      return 'x-fictionbook'
  }
}

export const definingReportFormat = (format) => {
  switch (format) {
    case 'xlsx':
      return 'vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    case 'docx':
      return 'msword'
  }
}

export const downloadFiles = (filename, url, formatFn, format) => {
  const token = localStorage.getItem('token')
  Axios.get(`http://188.68.219.162/${url}=${filename}`, {
    headers: { Authorization: `Bearer ${token}` },
    responseType: 'arraybuffer',
  }).then((response) => {
    const buf = Buffer.from(response.data, 'binary').toString('base64')
    const linkSource = `data:application/${formatFn(format)};base64,${buf}`
    const downloadLink = document.createElement('a')
    downloadLink.href = linkSource
    downloadLink.download = filename
    downloadLink.click()
    downloadLink.remove()
  })
}
