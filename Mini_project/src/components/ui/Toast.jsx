import React, { useEffect } from 'react'

/**
 * Toast Notification Component
 * @param {string} type - Type of toast: 'success', 'error', 'info'
 * @param {string} message - Message to display
 * @param {function} onClose - Callback when toast closes
 * @param {number} duration - Auto-dismiss duration in ms (default: 3000)
 */
export default function Toast({ type = 'info', message, onClose, duration = 3000 }) {
    useEffect(() => {
        if (duration && duration > 0) {
            const timer = setTimeout(() => {
                onClose()
            }, duration)

            return () => clearTimeout(timer)
        }
    }, [duration, onClose])

    const getIcon = () => {
        switch (type) {
            case 'success':
                return '✓'
            case 'error':
                return '✕'
            case 'info':
            default:
                return 'ℹ'
        }
    }

    return (
        <div className={`toast toast-${type}`}>
            <div className="toast-icon" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {getIcon()}
            </div>
            <div className="toast-message">{message}</div>
            <button
                onClick={onClose}
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    padding: '0 0.25rem'
                }}
            >
                ×
            </button>
        </div>
    )
}

/**
 * Toast Container Component
 * Manages multiple toasts
 */
export function ToastContainer({ toasts, removeToast }) {
    if (!toasts || toasts.length === 0) return null

    return (
        <div className="toast-container">
            {toasts.map(toast => (
                <Toast
                    key={toast.id}
                    type={toast.type}
                    message={toast.message}
                    duration={toast.duration}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
    )
}
