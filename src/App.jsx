import { useState, useEffect } from 'react'

// LocalStorage helpers
const STORAGE_KEY = 'michelin-bistro-responses'

const saveToLocalStorage = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

const loadFromLocalStorage = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : null
}

const clearLocalStorage = () => {
  localStorage.removeItem(STORAGE_KEY)
}

// Google Sheets submission
const submitToGoogleSheets = async (data, webhookUrl) => {
  if (!webhookUrl) {
    console.warn('No Google Sheets webhook URL configured')
    return { success: false, error: 'No webhook URL' }
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    })
    return { success: true }
  } catch (error) {
    console.error('Failed to submit to Google Sheets:', error)
    return { success: false, error: error.message }
  }
}

// Screen 1: Cover
const CoverScreen = ({ onEnter }) => (
  <div className="h-full flex flex-col justify-between p-10 bg-[#FAFAF8]">
    <div />

    <div className="space-y-16">
      <div className="space-y-6">
        <p className="text-[9px] tracking-[0.6em] text-neutral-400 uppercase">
          Context Graph
        </p>
        <h1 className="text-[22px] font-extralight tracking-[0.02em] text-neutral-800 leading-tight">
          Decision<br />Trace
        </h1>
      </div>

      <div className="w-8 h-[0.5px] bg-neutral-300" />

      <p className="text-[11px] font-light text-neutral-400 leading-[1.8] max-w-[180px]">
        Seven courses to capture<br />
        the reasoning your systems forget.
      </p>
    </div>

    <div className="flex justify-between items-end">
      <span className="text-[9px] tracking-[0.4em] text-neutral-300">
        ✦✦
      </span>
      <button
        onClick={onEnter}
        className="text-[10px] tracking-[0.25em] text-neutral-500 hover:text-neutral-800 transition-colors duration-500"
      >
        ENTER
      </button>
    </div>
  </div>
)

// Screen 2: Role Selection
const RoleScreen = ({ selected, onSelect, onContinue }) => {
  const roles = [
    { name: 'revops', desc: 'revenue operations' },
    { name: 'devops', desc: 'platform & infrastructure' },
    { name: 'security', desc: 'compliance & response' },
    { name: 'other', desc: 'custom definition' },
  ]

  return (
    <div className="h-full flex flex-col bg-[#FAFAF8]">
      <div className="p-10 pb-0">
        <div className="flex justify-between items-start">
          <span className="text-[9px] tracking-[0.5em] text-neutral-300">01</span>
          <div className="flex gap-[3px]">
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`w-3 h-[0.5px] ${i === 0 ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-10">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-[9px] tracking-[0.5em] text-neutral-400 uppercase">
              Le Rôle
            </p>
            <h2 className="text-[17px] font-extralight text-neutral-800 tracking-wide">
              Who carries the context?
            </h2>
          </div>

          <div className="space-y-0">
            {roles.map((role, i) => (
              <button
                key={role.name}
                onClick={() => onSelect(i)}
                className="w-full text-left group"
              >
                <div className="py-5 flex items-baseline justify-between">
                  <span className={`text-[13px] font-light tracking-wide transition-all duration-500 ${
                    selected === i
                      ? 'text-neutral-800'
                      : 'text-neutral-300 group-hover:text-neutral-500'
                  }`}>
                    {role.name}
                  </span>
                  <span className={`text-[9px] tracking-[0.15em] transition-all duration-500 ${
                    selected === i ? 'text-neutral-400' : 'text-transparent'
                  }`}>
                    {role.desc}
                  </span>
                </div>
                <div className={`h-[0.5px] transition-all duration-500 ${
                  selected === i ? 'bg-neutral-400' : 'bg-neutral-100'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-10 pt-0">
        <button
          onClick={onContinue}
          className="w-full py-4 text-[10px] tracking-[0.3em] text-neutral-800 border-[0.5px] border-neutral-300 hover:bg-neutral-800 hover:text-[#FAFAF8] hover:border-neutral-800 transition-all duration-500"
        >
          CONTINUE
        </button>
      </div>
    </div>
  )
}

// Screen 3: Friction Point
const FrictionScreen = ({ selected, onSelect, onBack, onContinue }) => {
  const points = [
    'deal exceptions',
    'pricing overrides',
    'contract amendments',
    'churn interventions',
  ]

  return (
    <div className="h-full flex flex-col bg-[#FAFAF8]">
      <div className="p-10 pb-0">
        <div className="flex justify-between items-start">
          <span className="text-[9px] tracking-[0.5em] text-neutral-300">02</span>
          <div className="flex gap-[3px]">
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`w-3 h-[0.5px] ${i < 2 ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-10">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-[9px] tracking-[0.5em] text-neutral-400 uppercase">
              La Friction
            </p>
            <h2 className="text-[17px] font-extralight text-neutral-800 tracking-wide">
              Where does reasoning vanish?
            </h2>
          </div>

          <div>
            {points.map((point, i) => (
              <button
                key={point}
                onClick={() => onSelect(i)}
                className="w-full text-left group"
              >
                <div className="py-5 flex items-center justify-between">
                  <span className={`text-[13px] font-light tracking-wide transition-all duration-500 ${
                    selected === i
                      ? 'text-neutral-800'
                      : 'text-neutral-300 group-hover:text-neutral-500'
                  }`}>
                    {point}
                  </span>
                  <div className={`w-1 h-1 rounded-full transition-all duration-500 ${
                    selected === i ? 'bg-neutral-800' : 'bg-transparent'
                  }`} />
                </div>
                <div className={`h-[0.5px] transition-all duration-500 ${
                  selected === i ? 'bg-neutral-400' : 'bg-neutral-100'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-10 pt-0 flex gap-4">
        <button
          onClick={onBack}
          className="text-[10px] tracking-[0.3em] text-neutral-400 hover:text-neutral-800 transition-all duration-500"
        >
          BACK
        </button>
        <button
          onClick={onContinue}
          className="flex-1 py-4 text-[10px] tracking-[0.3em] text-neutral-800 border-[0.5px] border-neutral-300 hover:bg-neutral-800 hover:text-[#FAFAF8] hover:border-neutral-800 transition-all duration-500"
        >
          CONTINUE
        </button>
      </div>
    </div>
  )
}

// Screen 4: Goal input
const GoalScreen = ({ value, onChange, onBack, onContinue }) => {
  return (
    <div className="h-full flex flex-col bg-[#FAFAF8]">
      <div className="p-10 pb-0">
        <div className="flex justify-between items-start">
          <span className="text-[9px] tracking-[0.5em] text-neutral-300">03</span>
          <div className="flex gap-[3px]">
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`w-3 h-[0.5px] ${i < 3 ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-10">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-[9px] tracking-[0.5em] text-neutral-400 uppercase">
              L'Objectif
            </p>
            <h2 className="text-[17px] font-extralight text-neutral-800 tracking-wide">
              What was decided?
            </h2>
          </div>

          <div className="space-y-6">
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="describe the decision..."
              className="w-full h-24 bg-transparent text-[13px] font-light text-neutral-800 placeholder:text-neutral-300 resize-none focus:outline-none border-b-[0.5px] border-neutral-200 focus:border-neutral-400 transition-colors duration-500 leading-relaxed tracking-wide"
            />
            <p className="text-[9px] text-neutral-300 leading-[1.8] tracking-wide">
              The goal anchors everything that follows.
            </p>
          </div>
        </div>
      </div>

      <div className="p-10 pt-0">
        <div className="flex justify-center gap-2 mb-8">
          {['goal', 'context', 'policy', 'tools', 'branch', 'human', 'outcome'].map((_, i) => (
            <div key={i} className={`w-1 h-1 rounded-full transition-all duration-500 ${
              i === 0 ? 'bg-neutral-800' : 'bg-neutral-200'
            }`} />
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="text-[10px] tracking-[0.3em] text-neutral-400 hover:text-neutral-800 transition-all duration-500"
          >
            BACK
          </button>
          <button
            onClick={onContinue}
            className="flex-1 py-4 text-[10px] tracking-[0.3em] text-neutral-800 border-[0.5px] border-neutral-300 hover:bg-neutral-800 hover:text-[#FAFAF8] hover:border-neutral-800 transition-all duration-500"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}

// Screen 5: Confirmation
const ConfirmationScreen = ({ status, onStartOver }) => (
  <div className="h-full flex flex-col justify-between p-10 bg-[#FAFAF8]">
    <div className="flex justify-between items-start">
      <span className="text-[9px] tracking-[0.5em] text-neutral-300">✓</span>
      <div className="flex gap-[3px]">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="w-3 h-[0.5px] bg-neutral-800" />
        ))}
      </div>
    </div>

    <div className="space-y-10">
      <div className="space-y-6">
        <p className="text-[9px] tracking-[0.6em] text-neutral-400 uppercase">
          {status === 'submitting' ? 'Submitting' : status === 'success' ? 'Merci' : 'Recorded'}
        </p>
        <h1 className="text-[22px] font-extralight tracking-[0.02em] text-neutral-800 leading-tight">
          {status === 'submitting' ? (
            'Recording...'
          ) : (
            <>Decision<br />Captured</>
          )}
        </h1>
      </div>

      <div className="w-8 h-[0.5px] bg-neutral-300" />

      <p className="text-[11px] font-light text-neutral-400 leading-[1.8] max-w-[180px]">
        {status === 'submitting'
          ? 'Saving your context trace...'
          : 'Your reasoning has been preserved for future reference.'}
      </p>
    </div>

    <div className="flex justify-between items-end">
      <span className="text-[9px] tracking-[0.4em] text-neutral-300">
        ✦✦✦
      </span>
      {status !== 'submitting' && (
        <button
          onClick={onStartOver}
          className="text-[10px] tracking-[0.25em] text-neutral-500 hover:text-neutral-800 transition-colors duration-500"
        >
          START OVER
        </button>
      )}
    </div>
  </div>
)

// Role and friction labels for display
const ROLES = ['revops', 'devops', 'security', 'other']
const FRICTIONS = ['deal exceptions', 'pricing overrides', 'contract amendments', 'churn interventions']

// Main Component
function App() {
  // Configure your Google Sheets webhook URL here
  const GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbybp4FRrbL8HtFr3fSYzHpx2PFgVo33Q6P-FMU9z0AMHknnEYs-EBnicxilSj0U8UtY/exec'

  const [activeScreen, setActiveScreen] = useState(0)
  const [submitStatus, setSubmitStatus] = useState('idle')

  // Form state
  const [responses, setResponses] = useState({
    role: 0,
    friction: 0,
    goal: '',
  })

  // Load from localStorage on mount
  useEffect(() => {
    const saved = loadFromLocalStorage()
    if (saved) {
      setResponses(saved)
    }
  }, [])

  // Save to localStorage whenever responses change
  useEffect(() => {
    saveToLocalStorage(responses)
  }, [responses])

  const updateResponse = (key, value) => {
    setResponses(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async () => {
    setActiveScreen(4)
    setSubmitStatus('submitting')

    const submissionData = {
      role: ROLES[responses.role],
      friction: FRICTIONS[responses.friction],
      goal: responses.goal,
    }

    // Always save to localStorage
    saveToLocalStorage(submissionData)

    // Submit to Google Sheets if configured
    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      await submitToGoogleSheets(submissionData, GOOGLE_SHEETS_WEBHOOK_URL)
    }

    setSubmitStatus('success')
  }

  const handleStartOver = () => {
    clearLocalStorage()
    setResponses({ role: 0, friction: 0, goal: '' })
    setActiveScreen(0)
    setSubmitStatus('idle')
  }

  const screens = ['cover', 'rôle', 'friction', 'objectif', 'fin']
  const labels = screens.slice(0, 4)

  const renderScreen = () => {
    switch (activeScreen) {
      case 0:
        return <CoverScreen onEnter={() => setActiveScreen(1)} />
      case 1:
        return (
          <RoleScreen
            selected={responses.role}
            onSelect={(i) => updateResponse('role', i)}
            onContinue={() => setActiveScreen(2)}
          />
        )
      case 2:
        return (
          <FrictionScreen
            selected={responses.friction}
            onSelect={(i) => updateResponse('friction', i)}
            onBack={() => setActiveScreen(1)}
            onContinue={() => setActiveScreen(3)}
          />
        )
      case 3:
        return (
          <GoalScreen
            value={responses.goal}
            onChange={(v) => updateResponse('goal', v)}
            onBack={() => setActiveScreen(2)}
            onContinue={handleSubmit}
          />
        )
      case 4:
        return (
          <ConfirmationScreen
            status={submitStatus}
            onStartOver={handleStartOver}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Navigation */}
        <div className="flex justify-center gap-12 mb-12">
          {labels.map((label, i) => (
            <button
              key={label}
              onClick={() => i < 4 && setActiveScreen(i)}
              className={`text-[9px] tracking-[0.4em] uppercase transition-all duration-500 ${
                activeScreen === i
                  ? 'text-neutral-800'
                  : 'text-neutral-300 hover:text-neutral-500'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Device */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Navigation arrows */}
            <button
              onClick={() => setActiveScreen(Math.max(0, activeScreen - 1))}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[10px] tracking-[0.2em] transition-all duration-500 ${
                activeScreen === 0 ? 'text-neutral-200' : 'text-neutral-400 hover:text-neutral-800'
              }`}
            >
              ←
            </button>
            <button
              onClick={() => setActiveScreen(Math.min(4, activeScreen + 1))}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[10px] tracking-[0.2em] transition-all duration-500 ${
                activeScreen === 4 ? 'text-neutral-200' : 'text-neutral-400 hover:text-neutral-800'
              }`}
            >
              →
            </button>

            {/* Phone frame */}
            <div className="w-[320px] h-[640px] bg-[#FAFAF8] rounded-[36px] p-2 shadow-2xl shadow-neutral-300/30">
              <div className="w-full h-full rounded-[28px] overflow-hidden">
                {renderScreen()}
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-[9px] tracking-[0.3em] text-neutral-300 mt-12 uppercase">
          {activeScreen === 0 && 'the menu'}
          {activeScreen === 1 && 'first course · the role'}
          {activeScreen === 2 && 'second course · the friction'}
          {activeScreen === 3 && 'third course · the schema'}
          {activeScreen === 4 && 'digestif · complete'}
        </p>
      </div>
    </div>
  )
}

export default App
