type linkType = {
  self: string
}

type imageSizeType = {
  height: number
  width: number
}

type titleType = {
  en_jp: string
  ja_jp: string
}

type dimensionsType = {
  large: imageSizeType
  small: imageSizeType
  tiny: imageSizeType
}

type imageType = {
  large: string
  meta: {
    dimensions: dimensionsType
  }
  original: string
  small: string
  tiny: string
}

type relationshipType = {
  animeCharacters: {
    links: linkType
  }
  animeProductions: {
    links: linkType
  }
  animeStaff: {
    links: linkType
  }
  castings: {
    links: linkType
  }
  categories: {
    links: linkType
  }
  characters: {
    links: linkType
  }
  episodes: {
    links: linkType
  }
  genres: {
    links: linkType
  }
  installments: {
    links: linkType
  }
  mappings: {
    links: linkType
  }
  mediaRelationships: {
    links: linkType
  }
  productions: {
    links: linkType
  }
  quotes: {
    links: linkType
  }
  reviews: {
    links: linkType
  }
  staff: {
    links: linkType
  }
  streamingLinks: {
    links: linkType
  }
}

type attributesType = {
  abbreviatedTitles: string[]
  ageRating: string
  ageRatingGuide: string
  averageRating: string
  canonicalTitle: string
  coverImage: imageType
  coverImageTopOffset: string
  createdAt: string
  description: string
  endDate: string
  episodeCount: number
  episodeLength: number
  favoritesCount: number
  nextRelease: string
  nsfw: boolean
  popularityRank: number
  posterImage: imageType
  ratingFrequencies: any
  ratingRank: number
  showType: string
  slug: string
  startDate: string
  status: string
  subtype: string
  synopsis: string
  tba: string
  titles: titleType
  totalLength: number
  updatedAt: string
  userCount: number
  youtubeVideoId: string
}

export class AnimesDTO {
  id: string
  type: string
  links: linkType
  relationships: relationshipType
  attributes: attributesType
}
