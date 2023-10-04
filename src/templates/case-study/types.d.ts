export interface DataProps {
    contentfulCaseStudy: {
      title: string
      industry: string
      challenges: {
        [key: string]: any
      }
      highlights: {
        raw: any
      }
      benefitsResults: {
        raw: any
      }
    }
  }
