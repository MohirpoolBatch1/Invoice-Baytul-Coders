import React from 'react'
import Modal from 'react-modal'
import {useNavigate} from 'react-router-dom'
import {useDeleteInvoiceMutation} from '../../app/invoiceApi'
import Button from '../Button/Button.jsx'
import {customStyles} from './constant'

function DeletionModal({invoiceId, isOpen, closeModal}) {
  const [deleteInvoiceItem] = useDeleteInvoiceMutation()
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteInvoiceItem(invoiceId)
    closeModal()
    navigate('/')
  }

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <h2 className="text-[1.5rem] font-bold">Confirm Deletion</h2>
      <p className="my-4 text-gray-300">
        {`Are you sure you want to delete invoice #${invoiceId.toUpperCase()}? This action cannot be
          undone.`}
      </p>
      <div className="flex justify-end space-x-2">
        <Button onClick={closeModal} buttonKind="edit">
          Cancel
        </Button>
        <Button onClick={handleDelete} buttonKind="danger">
          delete
        </Button>
      </div>
    </Modal>
  )
}

export default DeletionModal
