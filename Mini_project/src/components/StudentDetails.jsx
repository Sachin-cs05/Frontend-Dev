import React from 'react'
import { getGradeBadgeClass, getPerformanceMessage } from '../utils/gradeCalculator.js'

export default function StudentDetails({ student, onBack, onEdit, onDelete }) {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="card animate-fadeIn">
          <div className="card-header">
            <h1 className="card-title">📋 Student Details</h1>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {/* Name */}
            <div>
              <label className="input-label">Student Name</label>
              <div style={{
                padding: 'var(--space-md)',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                color: 'var(--text-primary)'
              }}>
                {student.name}
              </div>
            </div>

            {/* Section */}
            <div>
              <label className="input-label">Section</label>
              <div style={{
                padding: 'var(--space-md)',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-secondary)'
              }}>
                Section {student.section}
              </div>
            </div>

            {/* Marks with Progress Bar */}
            <div>
              <label className="input-label">Marks</label>
              <div style={{
                padding: 'var(--space-md)',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-md)'
              }}>
                <div style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-sm)'
                }}>
                  {student.marks} / 100
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${student.marks}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Grade */}
            <div>
              <label className="input-label">Grade</label>
              <div style={{
                padding: 'var(--space-md)',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span className={`badge ${getGradeBadgeClass(student.grade)}`} style={{ fontSize: 'var(--font-size-lg)' }}>
                  {student.grade}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
                  {getPerformanceMessage(student.grade)}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{
            marginTop: 'var(--space-xl)',
            display: 'flex',
            gap: 'var(--space-md)',
            paddingTop: 'var(--space-lg)',
            borderTop: '1px solid var(--border)'
          }}>
            <button className="btn btn-secondary" onClick={onBack} style={{ flex: 1 }}>
              ← Back
            </button>
            {onEdit && (
              <button className="btn btn-primary" onClick={() => onEdit(student)}>
                ✏️ Edit
              </button>
            )}
            {onDelete && (
              <button className="btn btn-error" onClick={() => onDelete(student.id)}>
                🗑️ Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

