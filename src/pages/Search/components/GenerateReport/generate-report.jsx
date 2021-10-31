import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import './styles.scss'
import BtnClose from '@/assets/img/auth/close.png'
import FormatButton from '@/pages/Search/components/FormatButton/format-burron'
import { GreenBtn } from '@/components/GreenBtn/green-btn'
import CheckboxReport from '@/pages/Search/components/CheckboxReport/checkbox-report'
import { actionOpenReport } from '@/store/catalogBooks/actions'
import { thunkGenerateReport } from '@/store/catalogBooks/thunks'

const GenerateReport = ({ handleClickToCloseModal, isReport, query, filename }) => {
  const dispatch = useDispatch()

  const [docFormat, setDocFormat] = useState(true)
  const [xlsFormat, setXlsFormat] = useState(false)

  const handleClickSwitchFormat = () => {
    setDocFormat(!docFormat)
    setXlsFormat(!xlsFormat)
  }

  return (
    <div className={isReport ? `report-modal` : `report-modal--none`}>
      <button className="report-modal__back" onClick={handleClickToCloseModal}>
        <img src={BtnClose} alt="back" />
      </button>
      <h2 className="report-modal__title">Формирование отчета</h2>
      <Formik
        initialValues={{
          docFormat: true,
          xlsFormat: false,
          author: true,
          numberDoc: true,
          nameDoc: false,
          docType: false,
          docSection: false,
          docPlacePublications: false,
          docDate: false,
          docTags: false,
          documentSection: false,
          isbn: false,
          doi: false,
          docBiblioCite: false,
          docCode: false,
          docComments: false,
          docRank: false,
        }}
        onSubmit={(values) => {
          const formatReport = xlsFormat && !docFormat ? 'xlsx' : 'docx'
          dispatch(
            thunkGenerateReport({
              type_report: formatReport,
              type_query: 'advance',
              query: query,
              setting: {
                authors: values.author,
                typeDoc: values.docType,
                section: values.docSection,
                placeOfPublish: values.docPlacePublications,
                dateOfPublish: values.docDate,
                tags: values.docTags,
                areaOfTheDoc: values.documentSection,
                ISBN: values.isbn,
                DOI: values.doi,
                comment: values.docComments,
                rank: values.docRank,
              },
            }),
          )
          setTimeout(() => {
            dispatch(
              actionOpenReport({
                isReport: false,
              }),
            )
          }, 2000)
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="report-modal-form">
            <div className="report-modal-form-format-container">
              <FormatButton
                docFormat={docFormat}
                handleClickSwitchFormat={handleClickSwitchFormat}
              >
                doc
              </FormatButton>
              <FormatButton
                docFormat={xlsFormat}
                handleClickSwitchFormat={handleClickSwitchFormat}
              >
                xls
              </FormatButton>
            </div>
            <div className="report-modal-form-setting-container">
              <CheckboxReport
                name="author"
                setField={setFieldValue}
                value={values.author}
              >
                Ф.И.О. Автора
              </CheckboxReport>
              <CheckboxReport
                name="numberDoc"
                setField={setFieldValue}
                value={values.numberDoc}
              >
                Номер документа
              </CheckboxReport>
              <CheckboxReport
                name="nameDoc"
                setField={setFieldValue}
                value={values.nameDoc}
              >
                Название документа
              </CheckboxReport>
              <CheckboxReport
                name="docType"
                setField={setFieldValue}
                value={values.docType}
              >
                Вид документа
              </CheckboxReport>
              <CheckboxReport
                name="docSection"
                setField={setFieldValue}
                value={values.docSection}
              >
                Раздел
              </CheckboxReport>
              <CheckboxReport
                name="docPlacePublications"
                setField={setFieldValue}
                value={values.docPlacePublications}
              >
                Место буликации
              </CheckboxReport>
              <CheckboxReport
                name="docDate"
                setField={setFieldValue}
                value={values.docDate}
              >
                Дата публикации
              </CheckboxReport>
              <CheckboxReport
                name="docTags"
                setField={setFieldValue}
                value={values.docTags}
              >
                Теги
              </CheckboxReport>
              <CheckboxReport
                name="documentSection"
                setField={setFieldValue}
                value={values.documentSection}
              >
                Область документа
              </CheckboxReport>
              <CheckboxReport name="isbn" setField={setFieldValue} value={values.isbn}>
                ISBN
              </CheckboxReport>
              <CheckboxReport name="doi" setField={setFieldValue} value={values.doi}>
                DOI
              </CheckboxReport>
              <CheckboxReport
                name="docBiblioCite"
                setField={setFieldValue}
                value={values.docBiblioCite}
              >
                Библиографическое цитирование
              </CheckboxReport>
              <CheckboxReport
                name="docCode"
                setField={setFieldValue}
                value={values.docCode}
              >
                Коды
              </CheckboxReport>
              <CheckboxReport
                name="docComments"
                setField={setFieldValue}
                value={values.docComments}
              >
                Коментарий
              </CheckboxReport>
              <CheckboxReport
                name="docRank"
                setField={setFieldValue}
                value={values.docRank}
              >
                Ранг
              </CheckboxReport>
            </div>
            <GreenBtn
              availability={false}
              title={'Сформировать отчет'}
              className={'report-modal-form__submit'}
              type={'submit'}
              // handleClick={handleClickDownloadReport}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default GenerateReport
