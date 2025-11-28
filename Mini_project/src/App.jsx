import React, { useState, useEffect } from 'react'
import StudentList from './components/StudentList.jsx'
import StudentForm from './components/StudentForm.jsx'
import StudentDetails from './components/StudentDetails.jsx'
import Dashboard from './components/Dashboard.jsx'
import { ToastContainer } from './components/ui/Toast.jsx'
import { ConfirmModal } from './components/ui/Modal.jsx'
import * as service from './services/studentService.js'

export default function App() {
  const [students, setStudents] = useState([])
  const [mode, setMode] = useState('dashboard') // dashboard, list, add, edit, details
  const [selected, setSelected] = useState(null)
  const [toasts, setToasts] = useState([])
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, studentId: null })

  // Load students on mount
  useEffect(() => {
    loadStudents()
  }, [])

  const loadStudents = async () => {
    try {
      const data = await service.getStudents()
      setStudents(data)
    } catch (error) {
      showToast('error', 'Failed to load students')
    }
  }

  // Toast helpers
  const showToast = (type, message, duration = 3000) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, type, message, duration }])
  }

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  // Navigation
  const navigateTo = (newMode, student = null) => {
    setSelected(student)
    setMode(newMode)
  }

  const startAdd = () => {
    setSelected(null)
    setMode('add')
  }

  const startEdit = (student) => {
    setSelected(student)
    setMode('edit')
  }

  const startDetails = (student) => {
    setSelected(student)
    setMode('details')
  }

  const backToList = () => {
    setMode('list')
  }

  const backToDashboard = () => {
    setMode('dashboard')
  }

  // CRUD operations
  const handleAdd = async (payload) => {
    try {
      await service.createStudent(payload)
      await loadStudents()
      showToast('success', `Student "${payload.name}" added successfully!`)
      setMode('list')
    } catch (error) {
      showToast('error', 'Failed to add student')
    }
  }

  const handleEdit = async (id, payload) => {
    try {
      await service.updateStudent(id, payload)
      await loadStudents()
      showToast('success', `Student "${payload.name}" updated successfully!`)
      setMode('list')
    } catch (error) {
      showToast('error', 'Failed to update student')
    }
  }

  const requestDelete = (id) => {
    setConfirmModal({ isOpen: true, studentId: id })
  }

  const handleDelete = async () => {
    const id = confirmModal.studentId
    setConfirmModal({ isOpen: false, studentId: null })

    try {
      await service.deleteStudent(id)
      await loadStudents()
      showToast('success', 'Student deleted successfully')

      // If we're in details view and deleted this student, go back to list
      if (mode === 'details' && selected?.id === id) {
        setMode('list')
      }
    } catch (error) {
      showToast('error', 'Failed to delete student')
    }
  }

  const cancelDelete = () => {
    setConfirmModal({ isOpen: false, studentId: null })
  }

  // Render based on mode
  let content

  if (mode === 'dashboard') {
    content = <Dashboard students={students} onNavigate={navigateTo} />
  } else if (mode === 'add') {
    content = <StudentForm onSubmit={(data) => handleAdd(data)} onCancel={backToList} initial={null} />
  } else if (mode === 'edit' && selected) {
    content = <StudentForm onSubmit={(data) => handleEdit(selected.id, data)} onCancel={backToList} initial={selected} />
  } else if (mode === 'details' && selected) {
    content = (
      <StudentDetails
        student={selected}
        onBack={backToList}
        onEdit={startEdit}
        onDelete={requestDelete}
      />
    )
  } else {
    // Default to list view
    content = (
      <StudentList
        students={students}
        onLoad={loadStudents}
        onAdd={startAdd}
        onEdit={startEdit}
        onDelete={requestDelete}
        onView={startDetails}
      />
    )
  }

  return (
    <>
      {/* Navigation Bar */}
      <div style={{
        background: 'var(--gradient-glass)',
        borderBottom: '1px solid rgba(203, 213, 225, 0.5)',
        padding: 'var(--space-md) 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div className="container">
          <div className="flex justify-between items-center">
            <h2 style={{
              margin: 0,
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: '800'
            }}>
              🎓 Student Result System
            </h2>
            <div className="flex gap-md">
              <button
                className={`btn btn-sm ${mode === 'dashboard' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={backToDashboard}
              >
                📊 Dashboard
              </button>
              <button
                className={`btn btn-sm ${mode === 'list' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={backToList}
              >
                📋 Students
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {content}

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      {/* Confirm Delete Modal */}
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={cancelDelete}
        onConfirm={handleDelete}
        title="Delete Student"
        message="Are you sure you want to delete this student? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
      />
    </>
  )
}

