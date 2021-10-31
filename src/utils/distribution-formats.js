import { includes } from 'lodash'

export const distributionFormats = (
  arrayFiles = [],
  setFilePdf,
  setFileDoc,
  setFileFb2,
  setFileEpub,
  dispatch,
) => {
  arrayFiles.filter((file) => {
    if (includes(file.name, '.pdf')) {
      setFilePdf(file)
    }
    if (includes(file.name, '.epub')) {
      setFileEpub(file)
    }
    if (includes(file.name, '.doc')) {
      setFileDoc(file)
    }
    if (includes(file.name, '.fb2')) {
      setFileFb2(file)
    }
  })
}
