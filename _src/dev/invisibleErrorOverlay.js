// 참고: https://www.npmjs.com/package/react-error-overlay
export function invisibleErrorOverlay(isHide = true) {
  if (process.env.NODE_ENV === 'development') {
    import('react-error-overlay').then(
      ({ startReportingRuntimeErrors, stopReportingRuntimeErrors }) => {
        isHide ? stopReportingRuntimeErrors() : startReportingRuntimeErrors()
      }
    )
  }
}
