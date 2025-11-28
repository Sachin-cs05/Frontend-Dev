import React from 'react'
import { calculateGrade, getGradeBadgeClass } from '../utils/gradeCalculator.js'

/**
 * Dashboard Component
 * Shows statistics and overview of student data
 */
export default function Dashboard({ students, onNavigate }) {
    // Calculate statistics
    const totalStudents = students.length
    const averageMarks = totalStudents > 0
        ? (students.reduce((sum, s) => sum + s.marks, 0) / totalStudents).toFixed(1)
        : 0

    // Grade distribution
    const gradeDistribution = students.reduce((acc, student) => {
        const grade = student.grade || calculateGrade(student.marks)
        acc[grade] = (acc[grade] || 0) + 1
        return acc
    }, {})

    // Top performers (students with A+ or A)
    const topPerformers = students
        .filter(s => s.marks >= 80)
        .sort((a, b) => b.marks - a.marks)
        .slice(0, 5)

    // Pass/Fail count
    const passCount = students.filter(s => s.marks >= 40).length
    const failCount = totalStudents - passCount

    return (
        <div className="page-wrapper">
            <div className="container">
                {/* Header */}
                <div className="flex justify-between items-center mb-lg">
                    <h1>📊 Dashboard</h1>
                    <button className="btn btn-primary" onClick={() => onNavigate('list')}>
                        View All Students
                    </button>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-4 mb-lg">
                    <div className="stat-card">
                        <div className="stat-value">{totalStudents}</div>
                        <div className="stat-label">Total Students</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{averageMarks}</div>
                        <div className="stat-label">Average Marks</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--success)' }}>
                            {passCount}
                        </div>
                        <div className="stat-label">Passed</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--error)' }}>
                            {failCount}
                        </div>
                        <div className="stat-label">Failed</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-lg">
                    {/* Grade Distribution */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Grade Distribution</h3>
                        </div>
                        {Object.keys(gradeDistribution).length > 0 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                {['A+', 'A', 'B+', 'B', 'C', 'D', 'F'].map(grade => {
                                    const count = gradeDistribution[grade] || 0
                                    const percentage = totalStudents > 0 ? (count / totalStudents) * 100 : 0

                                    return (
                                        <div key={grade}>
                                            <div className="flex justify-between mb-sm">
                                                <span className={`badge ${getGradeBadgeClass(grade)}`}>{grade}</span>
                                                <span style={{ color: 'var(--text-secondary)' }}>
                                                    {count} students ({percentage.toFixed(0)}%)
                                                </span>
                                            </div>
                                            <div className="progress-bar">
                                                <div
                                                    className="progress-fill"
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="empty-state">
                                <div className="empty-state-icon">📊</div>
                                <div className="empty-state-title">No data available</div>
                            </div>
                        )}
                    </div>

                    {/* Top Performers */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">🏆 Top Performers</h3>
                        </div>
                        {topPerformers.length > 0 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                {topPerformers.map((student, index) => (
                                    <div
                                        key={student.id}
                                        className="flex justify-between items-center"
                                        style={{
                                            padding: 'var(--space-md)',
                                            background: 'var(--gradient-glass)',
                                            borderRadius: 'var(--radius-md)',
                                            border: '1px solid rgba(203, 213, 225, 0.5)',
                                            backdropFilter: 'blur(10px)',
                                            boxShadow: 'var(--shadow-sm)',
                                            transition: 'all var(--transition-base)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                        }}
                                    >
                                        <div className="flex items-center gap-md">
                                            <div
                                                style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '50%',
                                                    background: 'var(--gradient-primary)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 'bold',
                                                    color: 'white',
                                                    fontSize: 'var(--font-size-sm)',
                                                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
                                                }}
                                            >
                                                {index + 1}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                                                    {student.name}
                                                </div>
                                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>
                                                    Section {student.section}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-md">
                                            <span className={`badge ${getGradeBadgeClass(student.grade)}`}>
                                                {student.grade}
                                            </span>
                                            <span style={{ fontWeight: '700', fontSize: 'var(--font-size-lg)', color: 'var(--text-primary)' }}>
                                                {student.marks}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="empty-state">
                                <div className="empty-state-icon">🏆</div>
                                <div className="empty-state-title">No top performers yet</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
                                    Students with 80+ marks will appear here
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card mt-lg">
                    <div className="card-header">
                        <h3 className="card-title">Quick Actions</h3>
                    </div>
                    <div className="flex gap-md">
                        <button className="btn btn-primary" onClick={() => onNavigate('add')}>
                            ➕ Add New Student
                        </button>
                        <button className="btn btn-secondary" onClick={() => onNavigate('list')}>
                            📋 View All Students
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
