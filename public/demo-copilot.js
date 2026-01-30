// Demo Copilot Playback Engine
// Simulates an AI doctor copilot consultation

class DemoCopilot {
  constructor() {
    this.script = this.buildScript();
    this.currentStep = 0;
    this.speed = 4; // 4 = new normal (4x slower), 2 = slow (half of normal), 1 = fast
    this.isPlaying = false;
    this.isPaused = false;
    this.timeoutId = null;
    this.reasoningTimeoutId = null;
    this.guidanceTimeoutId = null;
    this.guidanceSpinnerTimeoutId = null;
    this.lastPatientStep = -1;
    
    this.initElements();
    this.attachEventListeners();
  }

  initElements() {
    this.startBtn = document.getElementById('start-btn');
    this.restartBtn = document.getElementById('restart-btn');
    this.pauseBtn = document.getElementById('pause-btn');
    this.speedSelect = document.getElementById('speed-select');
    this.transcriptMessages = document.getElementById('transcript-messages');
    this.reasoningContent = document.getElementById('reasoning-content');
    this.guidanceContent = document.getElementById('guidance-content');
    this.summaryContent = document.getElementById('summary-content');
    this.reasoningSection = document.getElementById('reasoning-section');
    this.guidanceSection = document.getElementById('guidance-section');
    this.summarySection = document.getElementById('summary-section');
  }

  attachEventListeners() {
    this.startBtn.addEventListener('click', () => this.start());
    this.restartBtn.addEventListener('click', () => this.restart());
    this.pauseBtn.addEventListener('click', () => this.togglePause());
    this.speedSelect.addEventListener('change', (e) => {
      this.speed = parseFloat(e.target.value);
    });
  }

  buildScript() {
    return [
      // Step 0: Initial complaint
      {
        delay: 2000,
        transcript: {
          speaker: 'patient',
          text: 'Good evening doctor, I\'m having trouble breathing since yesterday evening.'
        },
        reasoning: [
          'Initial complaint: Shortness of breath',
          'Possible differentials:',
          '• Pneumonia (bacterial/viral)',
          '• Acute bronchitis',
          '• Asthma exacerbation',
          '• Viral respiratory infection',
          '• Heart failure (less likely without cardiac history)'
        ],
        guidance: [
          'When did the symptom start. Ask for fever'
        ],
        summary: null
      },
      
      // Step 1: Doctor asks about onset
      {
        delay: 2500,
        transcript: {
          speaker: 'doctor',
          text: 'I understand. When exactly did this start? And do you have a fever?'
        },
        reasoning: null,
        guidance: null,
        summary: null
      },
      
      // Step 2: Patient answers
      {
        delay: 2000,
        transcript: {
          speaker: 'patient',
          text: 'It started yesterday around 6 PM. I started feeling feverish last night, and it\'s still there. No chest pain though.'
        },
        reasoning: [
          'Initial complaint: Shortness of breath',
          'Possible differentials:',
          '• Pneumonia (bacterial/viral) ⬆️',
          '• Acute bronchitis',
          '• Viral respiratory infection ⬆️',
          '• Asthma exacerbation',
          '• Heart failure (less likely)',
          '',
          'Key findings:',
          '• Acute onset (< 48 hours)',
          '• Fever present',
          '• No chest pain'
        ],
        guidance: [
          'Ask about cough and sputum (color, amount)'
        ],
        summary: null
      },
      
      // Step 3: Doctor asks about cough
      {
        delay: 2500,
        transcript: {
          speaker: 'doctor',
          text: 'Do you have a cough? If yes, are you bringing up any phlegm? What color is it?'
        },
        reasoning: null,
        guidance: null,
        summary: null
      },
      
      // Step 4: Patient answers about cough
      {
        delay: 2000,
        transcript: {
          speaker: 'patient',
          text: 'Yes, I\'ve been coughing a lot. The phlegm is yellow, and there\'s quite a bit of it.'
        },
        reasoning: null,
        guidance: [
          'Check temperature, vital signs (pulse and oxygen level)'
        ],
        summary: null
      },
      
      // Step 5: Doctor checks temperature
      {
        delay: 2000,
        transcript: {
          speaker: 'doctor',
          text: 'Let me check your temperature... [checking] It\'s 38.5°C. That\'s elevated.'
        },
        reasoning: [
          'Initial complaint: Shortness of breath',
          'Possible differentials:',
          '• Pneumonia (bacterial) ⬆️⬆️',
          '• Acute bronchitis',
          '• Viral respiratory infection',
          '• Asthma exacerbation',
          '',
          'Key findings:',
          '• Acute onset (< 48 hours)',
          '• Fever: 38.5°C',
          '• Productive cough with yellow sputum',
          '• No chest pain',
          '',
          'Yellow sputum + fever suggests bacterial infection'
        ],
        guidance: null,
        summary: null
      },
      
      // Step 6: Doctor collects vitals
      {
        delay: 3000,
        transcript: {
          speaker: 'doctor',
          text: 'Let me check your vital signs... [measuring] Pulse is 110 bpm, respiratory rate is 24 per minute, and your oxygen saturation is 92%.'
        },
        reasoning: null,
        guidance: null,
        guidanceAfterDelay: {
          delay: 2000,
          text: 'Ask for chronic conditions: asthma, diabetes, heart problems.'
        },
        summary: null
      },
      
      // Step 7: Doctor asks about comorbidities
      {
        delay: 2000,
        transcript: {
          speaker: 'doctor',
          text: 'Do you have any chronic conditions like asthma, diabetes, or heart problems?'
        },
        reasoning: null,
        guidance: null,
        summary: null
      },
      
      // Step 8: Patient answers about comorbidities
      {
        delay: 2000,
        transcript: {
          speaker: 'patient',
          text: 'No, I don\'t have any of those. I\'m generally healthy.'
        },
        reasoning: [
          'Initial complaint: Shortness of breath',
          'Working diagnosis:',
          '• Community-acquired pneumonia (moderate severity) ⬆️⬆️⬆️',
          '',
          'Key findings:',
          '• Acute onset (< 48 hours)',
          '• Fever: 38.5°C',
          '• Productive cough with yellow sputum',
          '• Vital signs:',
          '  - Pulse: 110 bpm (tachycardia)',
          '  - Respiratory rate: 24/min (tachypnea)',
          '  - SpO2: 92% (mild hypoxia)',
          '• No comorbidities',
          '',
          'Severity assessment:',
          '• Moderate respiratory distress',
          '• Requires monitoring and treatment',
          '• Red flag: SpO2 < 95% (needs oxygen support)'
        ],
        guidance: [
          'Physical examination:',
          '• Perform lung auscultation',
          '• Check for crackles, wheezing, or decreased breath sounds',
          '• Assess general appearance and work of breathing',
          '',
          'After examination:',
          '• Consider chest X-ray',
          '• Order CBC and CRP',
          '• Start empirical antibiotics per local guidelines'
        ],
        summary: null
      },
      
      // Step 9: Doctor performs auscultation
      {
        delay: 3000,
        transcript: {
          speaker: 'doctor',
          text: 'Let me listen to your lungs... [auscultating] I can hear crackles in the right lower lung area.'
        },
        reasoning: null,
        guidance: null,
        guidanceAfterDelay: {
          delay: 2000,
          text: 'Ask for recent contacts with a sick person, and recent travel'
        },
        summary: null
      },
      
      // Step 10: Doctor asks about travel/contacts
      {
        delay: 2000,
        transcript: {
          speaker: 'doctor',
          text: 'Have you been in contact with anyone who\'s been sick recently? Any recent travel?'
        },
        reasoning: null,
        guidance: null,
        summary: null
      },
      
      // Step 11: Patient answers
      {
        delay: 2000,
        transcript: {
          speaker: 'patient',
          text: 'My colleague at work had a cold last week. No recent travel.'
        },
        reasoning: [
          'Final assessment:',
          '• Diagnosis: Right lower lobe community-acquired pneumonia (moderate)',
          '',
          'Supporting evidence:',
          '• Acute onset with fever',
          '• Productive cough with yellow sputum',
          '• Tachypnea (24/min) and tachycardia (110 bpm)',
          '• Mild hypoxia (SpO2 92%)',
          '• Physical exam: crackles in right lower lobe',
          '• No significant comorbidities',
          '',
          'Severity: Moderate',
          '• Requires hospitalization consideration',
          '• Needs oxygen supplementation',
          '• Antibiotic therapy indicated'
        ],
        guidance: [
          'Treatment plan:',
          '1. Start empirical antibiotics:',
          '   - Amoxicillin-clavulanate OR',
          '   - Azithromycin (if penicillin allergy)',
          '2. Oxygen supplementation:',
          '   - Target SpO2 > 94%',
          '3. Supportive care:',
          '   - Antipyretics for fever',
          '   - Adequate hydration',
          '4. Monitoring:',
          '   - Watch for deterioration',
          '   - Escalate if SpO2 < 90%',
          '',
          'Investigations:',
          '• Chest X-ray (confirm diagnosis)',
          '• Complete blood count (CBC)',
          '• C-reactive protein (CRP)',
          '• Consider blood culture if severe'
        ],
        summary: null
      },
      
      // Step 12: Final summary appears
      {
        delay: 3000,
        transcript: null,
        reasoning: null,
        guidance: null,
        summary: {
          clinicalSummary: {
            age: '45 years',
            gender: 'Male',
            presentingComplaint: 'Shortness of breath and productive cough for 24 hours',
            keyFindings: [
              'Fever: 38.5°C',
              'Productive cough with yellow sputum',
              'Tachypnea: 24/min',
              'Tachycardia: 110 bpm',
              'Mild hypoxia: SpO2 92%',
              'Physical exam: Crackles in right lower lobe',
              'No significant comorbidities'
            ]
          },
          diagnosis: {
            primary: 'Right lower lobe community-acquired pneumonia (moderate severity)',
            icd10: 'J18.9',
            confidence: 'High'
          },
          recommendedTests: [
            'Chest X-ray (PA and lateral views)',
            'Complete blood count (CBC)',
            'C-reactive protein (CRP)',
            'Blood culture (if severe or no improvement)'
          ],
          treatmentPlan: {
            medications: [
              {
                name: 'Amoxicillin-clavulanate',
                dosage: '875mg/125mg',
                frequency: 'Twice daily',
                duration: '7-10 days',
                notes: 'Alternative: Azithromycin 500mg once daily if penicillin allergy'
              },
              {
                name: 'Paracetamol',
                dosage: '500-1000mg',
                frequency: 'Every 6-8 hours as needed',
                duration: 'Until afebrile',
                notes: 'For fever and discomfort'
              }
            ],
            supportiveCare: [
              'Oxygen supplementation to maintain SpO2 > 94%',
              'Adequate hydration',
              'Rest',
              'Monitor for signs of deterioration'
            ],
            monitoring: [
              'Vital signs every 4-6 hours',
              'Watch for: worsening hypoxia, increased respiratory rate, hemodynamic instability',
              'Escalate if SpO2 < 90% or clinical deterioration'
            ],
            followUp: 'Reassess in 48-72 hours or earlier if symptoms worsen'
          },
          prescription: {
            patientName: '[Patient Name]',
            date: new Date().toLocaleDateString('en-GB'),
            medications: [
              'Amoxicillin-clavulanate 875mg/125mg tablet',
              'Take 1 tablet twice daily with food',
              'Duration: 7-10 days',
              'Complete the full course even if feeling better',
              '',
              'Paracetamol 500mg tablet',
              'Take 1-2 tablets every 6-8 hours as needed for fever',
              'Maximum 4g per day'
            ],
            instructions: 'Follow up in 48-72 hours or earlier if symptoms worsen. Seek immediate care if breathing becomes more difficult or oxygen levels drop.'
          }
        }
      }
    ];
  }

  start() {
    if (this.isPlaying && !this.isPaused) return;
    
    this.isPlaying = true;
    this.isPaused = false;
    this.currentStep = 0;
    this.lastPatientStep = -1;
    this.startBtn.disabled = true;
    this.restartBtn.disabled = false;
    this.pauseBtn.disabled = false;
    this.pauseBtn.textContent = 'Pause';
    
    // Clear previous content
    this.transcriptMessages.innerHTML = '';
    this.reasoningContent.innerHTML = '<p class="placeholder">Waiting for consultation to begin...</p>';
    this.guidanceContent.innerHTML = ''; // Empty at start
    this.summaryContent.innerHTML = '<p class="placeholder">Summary will appear at the end of consultation...</p>';
    
    // Clear any pending guidance timeouts
    if (this.guidanceTimeoutId) {
      clearTimeout(this.guidanceTimeoutId);
      this.guidanceTimeoutId = null;
    }
    if (this.guidanceSpinnerTimeoutId) {
      clearTimeout(this.guidanceSpinnerTimeoutId);
      this.guidanceSpinnerTimeoutId = null;
    }
    
    // Show reasoning and guidance, hide summary initially
    // Guidance always visible (1/6), Reasoning visible initially (5/6), Summary hidden
    this.reasoningSection.classList.remove('hidden');
    this.guidanceSection.classList.remove('hidden');
    this.summarySection.classList.add('hidden');
    
    // Clear any pending timeouts
    if (this.reasoningTimeoutId) {
      clearTimeout(this.reasoningTimeoutId);
      this.reasoningTimeoutId = null;
    }
    
    this.playStep();
  }
  
  togglePause() {
    if (!this.isPlaying) return;
    
    this.isPaused = !this.isPaused;
    
    if (this.isPaused) {
      this.pauseBtn.textContent = 'Resume';
      // Pause is handled by not calling playStep in the timeout
    } else {
      this.pauseBtn.textContent = 'Pause';
      // Resume by continuing to next step
      this.playStep();
    }
  }

  restart() {
    this.stop();
    setTimeout(() => this.start(), 500);
  }

  stop() {
    this.isPlaying = false;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (this.reasoningTimeoutId) {
      clearTimeout(this.reasoningTimeoutId);
      this.reasoningTimeoutId = null;
    }
    if (this.guidanceTimeoutId) {
      clearTimeout(this.guidanceTimeoutId);
      this.guidanceTimeoutId = null;
    }
    if (this.guidanceSpinnerTimeoutId) {
      clearTimeout(this.guidanceSpinnerTimeoutId);
      this.guidanceSpinnerTimeoutId = null;
    }
    this.startBtn.disabled = false;
  }

  playStep() {
    if (!this.isPlaying || this.isPaused || this.currentStep >= this.script.length) {
      if (this.currentStep >= this.script.length) {
        this.isPlaying = false;
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
      }
      return;
    }

    const step = this.script[this.currentStep];
    let delay = step.delay * this.speed;

    // Check if this is a patient response
    const isPatientResponse = step.transcript && step.transcript.speaker === 'patient';
    const isDoctorSpeaking = step.transcript && step.transcript.speaker === 'doctor';
    
    // Update transcript
    if (step.transcript) {
      this.addTranscriptMessage(step.transcript.speaker, step.transcript.text);
      
      // If patient responded, track it for delayed reasoning
      if (isPatientResponse) {
        this.lastPatientStep = this.currentStep;
      }
    }

    // Handle guidance with spinner logic
    if (isPatientResponse && step.guidance) {
      // Patient responded: wait 2s (absolute time, not multiplied by speed for consistency), 
      // show spinner for 1s, then show guidance
      // Use fixed delays that feel natural regardless of speed setting
      const waitDelay = 2000; // 2 seconds absolute
      const spinnerDelay = 1000; // 1 second absolute
      
      // Clear any existing guidance timeouts first
      this.clearGuidanceTimeouts();
      
      this.guidanceTimeoutId = setTimeout(() => {
        if (!this.isPlaying || this.isPaused) return;
        this.showGuidanceSpinner();
        this.guidanceSpinnerTimeoutId = setTimeout(() => {
          if (!this.isPlaying || this.isPaused) return;
          this.hideGuidanceSpinner();
          this.updateGuidance(step.guidance);
        }, spinnerDelay);
      }, waitDelay);
    } else if (isDoctorSpeaking) {
      // Doctor is speaking: clear guidance after a short delay (when doctor's text appears)
      // This ensures guidance from patient response has time to show
      if (!step.guidanceAfterDelay) {
        // Clear guidance after a short delay to allow it to be visible briefly
        setTimeout(() => {
          if (this.isPlaying && !this.isPaused) {
            this.clearGuidance();
          }
        }, 100 * this.speed);
      } else {
        // If there's guidanceAfterDelay, clear current guidance immediately
        this.clearGuidance();
      }
      
      // Check if this doctor statement has guidanceAfterDelay
      if (step.guidanceAfterDelay) {
        // Use fixed delays for guidance (absolute time, not affected by speed)
        const waitDelay = step.guidanceAfterDelay.delay; // 2000ms absolute
        const spinnerDelay = 1000; // 1 second absolute
        
        // Clear any existing guidance timeouts first
        this.clearGuidanceTimeouts();
        
        this.guidanceTimeoutId = setTimeout(() => {
          if (!this.isPlaying || this.isPaused) return;
          this.showGuidanceSpinner();
          this.guidanceSpinnerTimeoutId = setTimeout(() => {
            if (!this.isPlaying || this.isPaused) return;
            this.hideGuidanceSpinner();
            this.updateGuidance([step.guidanceAfterDelay.text]);
          }, spinnerDelay);
        }, waitDelay);
      }
    }
    
    // Handle immediate guidance (for non-patient/doctor steps)
    if (step.guidance && !isPatientResponse && !isDoctorSpeaking) {
      this.updateGuidance(step.guidance);
    }

    // Update reasoning with delay if patient just responded
    if (step.reasoning && isPatientResponse) {
      // Delay reasoning by 1-3 seconds after patient response
      const reasoningDelay = (1000 + Math.random() * 2000) * this.speed;
      this.reasoningTimeoutId = setTimeout(() => {
        if (this.isPlaying) {
          this.updateReasoning(step.reasoning);
        }
      }, reasoningDelay);
    } else if (step.reasoning) {
      // If reasoning is not tied to patient response, show it immediately
      this.updateReasoning(step.reasoning);
    }

    // Update summary (and switch panels)
    if (step.summary) {
      this.updateSummary(step.summary);
      // Hide reasoning, keep guidance visible (1/6), show summary (5/6)
      this.reasoningSection.classList.add('hidden');
      this.guidanceSection.classList.remove('hidden'); // Keep guidance visible on top
      this.summarySection.classList.remove('hidden');
    }

    this.currentStep++;
    
    if (this.isPlaying && !this.isPaused) {
      this.timeoutId = setTimeout(() => this.playStep(), delay);
    }
  }

  addTranscriptMessage(speaker, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `transcript-message transcript-message--${speaker}`;
    
    const speakerLabel = document.createElement('div');
    speakerLabel.className = 'transcript-speaker';
    speakerLabel.textContent = speaker === 'doctor' ? 'Doctor' : 'Patient';
    
    const messageText = document.createElement('div');
    messageText.className = 'transcript-text';
    messageText.textContent = text;
    
    messageDiv.appendChild(speakerLabel);
    messageDiv.appendChild(messageText);
    
    this.transcriptMessages.appendChild(messageDiv);
    
    // Auto-scroll to bottom
    this.transcriptMessages.scrollTop = this.transcriptMessages.scrollHeight;
    
    // Add fade-in animation
    setTimeout(() => {
      messageDiv.classList.add('transcript-message--visible');
    }, 10);
  }

  updateReasoning(reasoning) {
    this.reasoningContent.innerHTML = '';
    const list = document.createElement('ul');
    list.className = 'reasoning-list';
    
    reasoning.forEach(item => {
      if (item.trim() === '') {
        const spacer = document.createElement('li');
        spacer.className = 'spacer';
        list.appendChild(spacer);
      } else {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      }
    });
    
    this.reasoningContent.appendChild(list);
    this.reasoningContent.classList.add('updated');
    setTimeout(() => {
      this.reasoningContent.classList.remove('updated');
    }, 300);
  }

  showGuidanceSpinner() {
    this.guidanceContent.innerHTML = '';
    const spinnerDiv = document.createElement('div');
    spinnerDiv.className = 'guidance-loading';
    spinnerDiv.innerHTML = '<div class="guidance-spinner"></div>';
    this.guidanceContent.appendChild(spinnerDiv);
  }
  
  hideGuidanceSpinner() {
    // Spinner will be replaced by guidance text
  }
  
  clearGuidanceTimeouts() {
    // Clear any pending timeouts
    if (this.guidanceTimeoutId) {
      clearTimeout(this.guidanceTimeoutId);
      this.guidanceTimeoutId = null;
    }
    if (this.guidanceSpinnerTimeoutId) {
      clearTimeout(this.guidanceSpinnerTimeoutId);
      this.guidanceSpinnerTimeoutId = null;
    }
  }
  
  clearGuidance() {
    // Clear any pending timeouts
    this.clearGuidanceTimeouts();
    // Clear the guidance content
    this.guidanceContent.innerHTML = '';
  }

  updateGuidance(guidance) {
    // Don't clear timeouts here - they're managed by the calling code
    this.guidanceContent.innerHTML = '';
    
    // Get the instruction text - guidance is now a simple array of strings
    let currentInstruction = '';
    
    // Find the first non-empty, non-header line
    for (let i = 0; i < guidance.length; i++) {
      const item = guidance[i].trim();
      if (item && !item.endsWith(':')) {
        // Remove bullets or numbering if present
        currentInstruction = item.replace(/^[•\d+\.\s-]+/, '').trim();
        if (currentInstruction) break;
      }
    }
    
    // Fallback: use first item or join all
    if (!currentInstruction) {
      const meaningfulItems = guidance
        .map(item => item.trim())
        .filter(item => item && !item.endsWith(':'))
        .map(item => item.replace(/^[•\d+\.\s-]+/, '').trim())
        .filter(item => item);
      
      if (meaningfulItems.length > 0) {
        currentInstruction = meaningfulItems[0];
      } else {
        currentInstruction = guidance.filter(item => item.trim()).join(' ');
      }
    }
    
    // Display the instruction in bold
    if (currentInstruction) {
      const instructionDiv = document.createElement('div');
      instructionDiv.className = 'guidance-current';
      instructionDiv.textContent = currentInstruction;
      this.guidanceContent.appendChild(instructionDiv);
      
      this.guidanceContent.classList.add('updated');
      setTimeout(() => {
        this.guidanceContent.classList.remove('updated');
      }, 300);
    }
  }

  updateSummary(summary) {
    this.summaryContent.innerHTML = '';
    
    // Clinical Summary
    const summarySection = document.createElement('div');
    summarySection.className = 'summary-section';
    
    const summaryTitle = document.createElement('h3');
    summaryTitle.textContent = 'Clinical Summary';
    summarySection.appendChild(summaryTitle);
    
    const summaryText = document.createElement('p');
    summaryText.innerHTML = `<strong>Age:</strong> ${summary.clinicalSummary.age}<br>
      <strong>Gender:</strong> ${summary.clinicalSummary.gender}<br>
      <strong>Presenting Complaint:</strong> ${summary.clinicalSummary.presentingComplaint}`;
    summarySection.appendChild(summaryText);
    
    const findingsList = document.createElement('ul');
    summary.clinicalSummary.keyFindings.forEach(finding => {
      const li = document.createElement('li');
      li.textContent = finding;
      findingsList.appendChild(li);
    });
    summarySection.appendChild(findingsList);
    
    this.summaryContent.appendChild(summarySection);
    
    // Diagnosis
    const diagnosisSection = document.createElement('div');
    diagnosisSection.className = 'summary-section';
    
    const diagnosisTitle = document.createElement('h3');
    diagnosisTitle.textContent = 'Likely Diagnosis';
    diagnosisSection.appendChild(diagnosisTitle);
    
    const diagnosisText = document.createElement('p');
    diagnosisText.innerHTML = `<strong>${summary.diagnosis.primary}</strong><br>
      <small>ICD-10: ${summary.diagnosis.icd10} | Confidence: ${summary.diagnosis.confidence}</small>`;
    diagnosisSection.appendChild(diagnosisText);
    
    this.summaryContent.appendChild(diagnosisSection);
    
    // Recommended Tests
    const testsSection = document.createElement('div');
    testsSection.className = 'summary-section';
    
    const testsTitle = document.createElement('h3');
    testsTitle.textContent = 'Recommended Tests';
    testsSection.appendChild(testsTitle);
    
    const testsList = document.createElement('ul');
    summary.recommendedTests.forEach(test => {
      const li = document.createElement('li');
      li.textContent = test;
      testsList.appendChild(li);
    });
    testsSection.appendChild(testsList);
    
    this.summaryContent.appendChild(testsSection);
    
    // Treatment Plan
    const treatmentSection = document.createElement('div');
    treatmentSection.className = 'summary-section';
    
    const treatmentTitle = document.createElement('h3');
    treatmentTitle.textContent = 'Treatment Plan';
    treatmentSection.appendChild(treatmentTitle);
    
    const medsTitle = document.createElement('h4');
    medsTitle.textContent = 'Medications:';
    treatmentSection.appendChild(medsTitle);
    
    summary.treatmentPlan.medications.forEach(med => {
      const medDiv = document.createElement('div');
      medDiv.className = 'medication-item';
      medDiv.innerHTML = `<strong>${med.name}</strong><br>
        ${med.dosage} - ${med.frequency} for ${med.duration}<br>
        <small>${med.notes}</small>`;
      treatmentSection.appendChild(medDiv);
    });
    
    const supportiveTitle = document.createElement('h4');
    supportiveTitle.textContent = 'Supportive Care:';
    treatmentSection.appendChild(supportiveTitle);
    
    const supportiveList = document.createElement('ul');
    summary.treatmentPlan.supportiveCare.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      supportiveList.appendChild(li);
    });
    treatmentSection.appendChild(supportiveList);
    
    this.summaryContent.appendChild(treatmentSection);
    
    // Prescription
    const prescriptionSection = document.createElement('div');
    prescriptionSection.className = 'summary-section prescription-section';
    
    const prescriptionTitle = document.createElement('h3');
    prescriptionTitle.textContent = 'Prescription Draft';
    prescriptionSection.appendChild(prescriptionTitle);
    
    const prescriptionDiv = document.createElement('div');
    prescriptionDiv.className = 'prescription-content';
    prescriptionDiv.innerHTML = `<p><strong>Patient:</strong> ${summary.prescription.patientName}</p>
      <p><strong>Date:</strong> ${summary.prescription.date}</p>
      <div class="prescription-meds">
        ${summary.prescription.medications.map(m => `<p>${m}</p>`).join('')}
      </div>
      <p class="prescription-instructions"><strong>Instructions:</strong> ${summary.prescription.instructions}</p>`;
    prescriptionSection.appendChild(prescriptionDiv);
    
    this.summaryContent.appendChild(prescriptionSection);
    
    this.summaryContent.classList.add('updated');
    setTimeout(() => {
      this.summaryContent.classList.remove('updated');
    }, 300);
  }
}

// Initialize demo when page loads
document.addEventListener('DOMContentLoaded', () => {
  const demo = new DemoCopilot();
  // Auto-start after a short delay
  setTimeout(() => {
    demo.start();
  }, 1000);
});

