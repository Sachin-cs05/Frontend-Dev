import React, { useState, useEffect } from 'react'
import { calculateGrade, validateMarks, getGradeBadgeClass, getPerformanceMessage } from '../utils/gradeCalculator.js'

export default function StudentForm({ initial, onSubmit, onCancel }) {
  const [name, setName] = useState(initial?.name || '')
  const [section, setSection] = useState(initial?.section || '')
  const [marks, setMarks] = useState(initial?.marks ?? '')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Auto-calculate grade when marks change
  const calculatedGrade = marks !== '' ? calculateGrade(marks) : ''

  const validate = () => {
    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!section.trim()) {
      newErrors.section = 'Section is required'
    }

    if (marks === '') {
      newErrors.marks = 'Marks are required'
    } else if (!validateMarks(marks)) {
      newErrors.marks = 'Marks must be between 0 and 100'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    const payload = {
      name: name.trim(),
      section: section.trim(),
      marks: Number(marks),
      grade: calculatedGrade
    }

    try {
      await onSubmit(payload)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-wrapper">
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="card animate-fadeIn">
          <div className="card-header">
            <h1 className="card-title">{initial ? '✏️ Edit Student' : '➕ Add Student'}</h1>
          </div>

          <form onSubmit={submit}>
            <div className="input-group">
              <label className="input-label">Student Name *</label>
              <input
                className={`input ${errors.name ? 'input-error' : ''}`}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter student name"
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            <div className="input-group">
              <label className="input-label">Section *</label>
              <select
                className={`input ${errors.section ? 'input-error' : ''}`}
                value={section}
                onChange={e => setSection(e.target.value)}
              >
                <option value="">Select section</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="D">Section D</option>
              </select>
              {errors.section && <div className="error-message">{errors.section}</div>}
            </div>

            <div className="input-group">
              <label className="input-label">Marks (0-100) *</label>
              <input
                type="number"
                className={`input ${errors.marks ? 'input-error' : ''}`}
                value={marks}
                onChange={e => setMarks(e.target.value)}
                placeholder="Enter marks"
                min="0"
                max="100"
              />
              {errors.marks && <div className="error-message">{errors.marks}</div>}
            </div>

            {/* Grade Preview */}
            {marks !== '' && validateMarks(marks) && (
              <div
                className="animate-fadeIn"
                style={{
                  padding: 'var(--space-lg)',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-sm)'
                }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Calculated Grade:</span>
                  <span className={`badge ${getGradeBadgeClass(calculatedGrade)}`}>
                    {calculatedGrade}
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${marks}%` }}
                  />
                </div>
                <div style={{
                  marginTop: 'var(--space-sm)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text-muted)',
                  textAlign: 'center'
                }}>
                  {getPerformanceMessage(calculatedGrade)}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ flex: 1 }}
              >
                {isSubmitting ? 'Saving...' : (initial ? '💾 Save Changes' : '➕ Add Student')}
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="btn btn-secondary"
                disabled={isSubmitting}
              >
                ✕ Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

