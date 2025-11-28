/**
 * Grade Calculator Utility
 * Calculates letter grades based on marks (0-100)
 */

/**
 * Calculate letter grade from marks
 * @param {number} marks - Student marks (0-100)
 * @returns {string} Letter grade (A+, A, B+, B, C, D, F)
 */
export function calculateGrade(marks) {
  const numMarks = Number(marks)
  
  if (isNaN(numMarks) || numMarks < 0 || numMarks > 100) {
    return 'Invalid'
  }
  
  if (numMarks >= 90) return 'A+'
  if (numMarks >= 80) return 'A'
  if (numMarks >= 70) return 'B+'
  if (numMarks >= 60) return 'B'
  if (numMarks >= 50) return 'C'
  if (numMarks >= 40) return 'D'
  return 'F'
}

/**
 * Get badge CSS class for a grade
 * @param {string} grade - Letter grade
 * @returns {string} CSS class name
 */
export function getGradeBadgeClass(grade) {
  const gradeMap = {
    'A+': 'badge-a-plus',
    'A': 'badge-a',
    'B+': 'badge-b-plus',
    'B': 'badge-b',
    'C': 'badge-c',
    'D': 'badge-d',
    'F': 'badge-f'
  }
  return gradeMap[grade] || 'badge-f'
}

/**
 * Get color for grade (for charts/visualizations)
 * @param {string} grade - Letter grade
 * @returns {string} Hex color code
 */
export function getGradeColor(grade) {
  const colorMap = {
    'A+': '#10b981',
    'A': '#22c55e',
    'B+': '#84cc16',
    'B': '#eab308',
    'C': '#f59e0b',
    'D': '#f97316',
    'F': '#ef4444'
  }
  return colorMap[grade] || '#ef4444'
}

/**
 * Validate marks range
 * @param {number} marks - Marks to validate
 * @returns {boolean} True if valid (0-100), false otherwise
 */
export function validateMarks(marks) {
  const numMarks = Number(marks)
  return !isNaN(numMarks) && numMarks >= 0 && numMarks <= 100
}

/**
 * Get performance message based on grade
 * @param {string} grade - Letter grade
 * @returns {string} Performance message
 */
export function getPerformanceMessage(grade) {
  const messages = {
    'A+': 'Outstanding! 🌟',
    'A': 'Excellent work! 👏',
    'B+': 'Very good! 🎉',
    'B': 'Good job! 👍',
    'C': 'Fair performance 📚',
    'D': 'Needs improvement 📖',
    'F': 'Failed - Keep trying 💪'
  }
  return messages[grade] || 'Invalid grade'
}
