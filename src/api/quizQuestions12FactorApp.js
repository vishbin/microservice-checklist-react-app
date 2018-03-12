var quizQuestions = [
  {
      question: "Is your service small and does one thing well?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Is your App composition based on these  factors: self-contained business features that have little shared functionalities, technology used or integration endpoints that are needed to work with",
      answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },

  {
      question: "Does your service have granular monitoring?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have log aggregation and dashboarding?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have application metrics collection tool?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have automated deployment in all environments including production?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have system dashboard?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service team necessitate more ownership and cross-functional skills . No more developers, QA people, operations silos…?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have clear Documentation in swagger or some other tool?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have Version and revision history Providing historical records of when things changed and why?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have Live documentation: If possible, offer live responses?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Is your service Easy to consume?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Is your service easy to deploy and scale?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Is your service Built with monitoring and troubleshooting in mind?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have Rapid provisioning of Infrastructure needed to run the service?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have  a monitoring regime is in place to detect serious problems quickly. The baseline here is detecting technical issues (counting errors, service availability, etc) but it's also worth monitoring business issues (such as detecting a drop in accounts open)?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service team have close relationship with the Devops and operational team ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Is your microservice  tested both in isolation (with unit tests or mock dependencies) and in a more realistic “integration” or “staging” environment where it is connected to the same kinds of services it will touch in production? ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Will your service  tests incorporate performance verification and failure modes? ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have externalized properties for both infrastructural changes (for example, changing the minimum number of threads within a pool), and some application-level changes (for example, enabling a new feature by flipping a feature flag). and can they be changed without restarting the service?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service provide a clear expectation of the response latency , and components that consume your service  aware of those expectations. That way, when those expectations are not met, the other parts of the system can decide to fire a timeout, trip a circuit breaker, or fail over to another instance of the service?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Does your service have authentication/authorization mechanism documented very clearly, and preferably captured in a client library or sample code to make it easy for other developers to consume the new microservice ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: "Is your service registered in a service discovery system to be easily discoverable ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: " Does your service have a well-understood scaling plan  ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: " Do you have some advance knowledge of what part of the microservice will fail first when it is significantly scaled out in its current form. ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: " Does your service have consistent request timeouts or circuit breakers for the services that it depends on   ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: " Do you have system-level awareness of how each service depends on others can only help with preventing cascading failures  ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: " Does your service have a rollback plan/automation if there are issues, and what would be considered “rollback worthy criteria  ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  },
  {
      question: " Does your service defined boundaries and policies for upgrading the service ?",
       answers: [
          {
              type: "12Factor",
              content: "Yes"
          },
          {
              type: "Not-A-12Factor",
              content: "No"
          }
      ]
  }
  
];

export default quizQuestions;
