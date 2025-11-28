import React, { useState } from 'react'
import { getGradeBadgeClass } from '../utils/gradeCalculator.js'

export default function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSection, setFilterSection] = useState('')
  const [filterGrade, setFilterGrade] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')

  // Filter and sort students
  const filteredStudents = students
    .filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSection = !filterSection || s.section === filterSection
      const matchesGrade = !filterGrade || s.grade === filterGrade
      return matchesSearch && matchesSection && matchesGrade
    })
    .sort((a, b) => {
      let aVal = a[sortBy]
      let bVal = b[sortBy]

      if (sortBy === 'name' || sortBy === 'section' || sortBy === 'grade') {
        aVal = String(aVal).toLowerCase()
        bVal = String(bVal).toLowerCase()
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1
      return 0
    })

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  const clearFilters = () => {
    setSearchTerm('')
    setFilterSection('')
    setFilterGrade('')
  }

  // Calculate stats
  const totalStudents = students.length
  const averageMarks = totalStudents > 0
    ? (students.reduce((sum, s) => sum + s.marks, 0) / totalStudents).toFixed(1)
    : 0

  return (
    <div className="page-wrapper">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-center mb-lg">
          <h1>📚 Students</h1>
          <div className="flex gap-md">
            <button className="btn btn-secondary" onClick={onLoad}>
              🔄 Refresh
            </button>
            <button className="btn btn-primary" onClick={onAdd}>
              ➕ Add Student
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 mb-lg">
          <div className="stat-card">
            <div className="stat-value">{totalStudents}</div>
            <div className="stat-label">Total Students</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{averageMarks}</div>
            <div className="stat-label">Average Marks</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="card mb-lg">
          <div className="search-filter-bar">
            <input
              type="text"
              className="input search-input"
              placeholder="🔍 Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="input"
              value={filterSection}
              onChange={(e) => setFilterSection(e.target.value)}
            >
              <option value="">All Sections</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
              <option value="D">Section D</option>
            </select>

            <select
              className="input"
              value={filterGrade}
              onChange={(e) => setFilterGrade(e.target.value)}
            >
              <option value="">All Grades</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>

            {(searchTerm || filterSection || filterGrade) && (
              <button className="btn btn-secondary" onClick={clearFilters}>
                ✕ Clear
              </button>
            )}
          </div>
        </div>

        {/* Students Table */}
        {filteredStudents.length === 0 ? (
          <div className="card">
            <div className="empty-state">
              <div className="empty-state-icon">
                {students.length === 0 ? '📝' : '🔍'}
              </div>
              <div className="empty-state-title">
                {students.length === 0 ? 'No students yet' : 'No students found'}
              </div>
              <p style={{ color: 'var(--text-muted)' }}>
                {students.length === 0
                  ? 'Click "Add Student" to get started'
                  : 'Try adjusting your search or filters'}
              </p>
            </div>
          </div>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => toggleSort('name')}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                  >
                    Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    onClick={() => toggleSort('section')}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                  >
                    Section {sortBy === 'section' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    onClick={() => toggleSort('marks')}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                  >
                    Marks {sortBy === 'marks' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    onClick={() => toggleSort('grade')}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                  >
                    Grade {sortBy === 'grade' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(s => (
                  <tr key={s.id}>
                    <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                      {s.name}
                    </td>
                    <td>Section {s.section}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                        <span style={{ fontWeight: '600' }}>{s.marks}</span>
                        <div className="progress-bar" style={{ width: '60px', height: '4px' }}>
                          <div
                            className="progress-fill"
                            style={{ width: `${s.marks}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${getGradeBadgeClass(s.grade)}`}>
                        {s.grade}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => onView(s)}
                        >
                          👁️ View
                        </button>
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => onEdit(s)}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="btn btn-sm btn-error"
                          onClick={() => onDelete(s.id)}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Results Count */}
        {filteredStudents.length > 0 && (
          <div style={{
            marginTop: 'var(--space-lg)',
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: 'var(--font-size-sm)'
          }}>
            Showing {filteredStudents.length} of {totalStudents} students
          </div>
        )}
      </div>
    </div>
  )
}

