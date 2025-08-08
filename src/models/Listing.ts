export interface Photo {
  originalURL: string;
  standardURL: string;
  thumbnailURL: string;
  mimeType: string;
}

export interface Listing {
  id: number;
  developmentName?: string | null;
  postTown: string;
  shortenedPostCode: string;
  region: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  sizeSqFt: number;
  priceInCents: number;
  minimumDepositInCents: number;
  estimatedDepositInCents: number;
  rentalIncomeInCents: number;
  isTenanted: boolean;
  isCashOnly: boolean;
  description: string;
  photos: Photo[];
  isFeatured: boolean;
  grossYield: number;
  hasUserRequestedContact: boolean;
  hasUserSavedListing: boolean;
  isShareSale: boolean;
  isGetgroundCompany: boolean;
  madeVisibleAt?: string | null;
}

export interface CreateListingRequest {
  developmentName?: string;
  postTown: string;
  shortenedPostCode: string;
  region: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  sizeSqFt: number;
  priceInCents: number;
  minimumDepositInCents: number;
  estimatedDepositInCents: number;
  rentalIncomeInCents: number;
  isTenanted: boolean;
  isCashOnly: boolean;
  description: string;
  photos: Photo[];
  isFeatured?: boolean;
  grossYield: number;
  isShareSale?: boolean;
  isGetgroundCompany?: boolean;
}

export interface UpdateListingRequest {
  developmentName?: string | null;
  postTown?: string;
  shortenedPostCode?: string;
  region?: string;
  propertyType?: string;
  bedrooms?: number;
  bathrooms?: number;
  sizeSqFt?: number;
  priceInCents?: number;
  minimumDepositInCents?: number;
  estimatedDepositInCents?: number;
  rentalIncomeInCents?: number;
  isTenanted?: boolean;
  isCashOnly?: boolean;
  description?: string;
  photos?: Photo[];
  isFeatured?: boolean;
  grossYield?: number;
  isShareSale?: boolean;
  isGetgroundCompany?: boolean;
  madeVisibleAt?: string | null;
}

// Validation functions
export const validateCreateListing = (data: any): CreateListingRequest => {
  if (!data.postTown || typeof data.postTown !== 'string') {
    throw new Error('Post town is required and must be a string');
  }
  
  if (!data.shortenedPostCode || typeof data.shortenedPostCode !== 'string') {
    throw new Error('Shortened post code is required and must be a string');
  }
  
  if (!data.region || typeof data.region !== 'string') {
    throw new Error('Region is required and must be a string');
  }
  
  if (!data.propertyType || typeof data.propertyType !== 'string') {
    throw new Error('Property type is required and must be a string');
  }
  
  if (typeof data.bedrooms !== 'number' || data.bedrooms < 0) {
    throw new Error('Bedrooms must be a non-negative number');
  }
  
  if (typeof data.bathrooms !== 'number' || data.bathrooms < 0) {
    throw new Error('Bathrooms must be a non-negative number');
  }
  
  if (typeof data.sizeSqFt !== 'number' || data.sizeSqFt <= 0) {
    throw new Error('Size in square feet must be a positive number');
  }
  
  if (typeof data.priceInCents !== 'number' || data.priceInCents < 0) {
    throw new Error('Price in cents must be a non-negative number');
  }
  
  if (typeof data.minimumDepositInCents !== 'number' || data.minimumDepositInCents < 0) {
    throw new Error('Minimum deposit in cents must be a non-negative number');
  }
  
  if (typeof data.estimatedDepositInCents !== 'number' || data.estimatedDepositInCents < 0) {
    throw new Error('Estimated deposit in cents must be a non-negative number');
  }
  
  if (typeof data.rentalIncomeInCents !== 'number' || data.rentalIncomeInCents < 0) {
    throw new Error('Rental income in cents must be a non-negative number');
  }
  
  if (typeof data.isTenanted !== 'boolean') {
    throw new Error('Is tenanted must be a boolean');
  }
  
  if (typeof data.isCashOnly !== 'boolean') {
    throw new Error('Is cash only must be a boolean');
  }
  
  if (!data.description || typeof data.description !== 'string') {
    throw new Error('Description is required and must be a string');
  }
  
  if (!Array.isArray(data.photos)) {
    throw new Error('Photos must be an array');
  }
  
  // Validate each photo
  data.photos.forEach((photo: any, index: number) => {
    if (!photo.originalURL || typeof photo.originalURL !== 'string') {
      throw new Error(`Photo ${index + 1} must have a valid originalURL`);
    }
    if (!photo.standardURL || typeof photo.standardURL !== 'string') {
      throw new Error(`Photo ${index + 1} must have a valid standardURL`);
    }
    if (!photo.thumbnailURL || typeof photo.thumbnailURL !== 'string') {
      throw new Error(`Photo ${index + 1} must have a valid thumbnailURL`);
    }
    if (!photo.mimeType || typeof photo.mimeType !== 'string') {
      throw new Error(`Photo ${index + 1} must have a valid mimeType`);
    }
  });
  
  if (typeof data.grossYield !== 'number' || data.grossYield < 0) {
    throw new Error('Gross yield must be a non-negative number');
  }
  
  return {
    developmentName: data.developmentName?.trim() || undefined,
    postTown: data.postTown.trim(),
    shortenedPostCode: data.shortenedPostCode.trim(),
    region: data.region.trim(),
    propertyType: data.propertyType.trim(),
    bedrooms: data.bedrooms,
    bathrooms: data.bathrooms,
    sizeSqFt: data.sizeSqFt,
    priceInCents: data.priceInCents,
    minimumDepositInCents: data.minimumDepositInCents,
    estimatedDepositInCents: data.estimatedDepositInCents,
    rentalIncomeInCents: data.rentalIncomeInCents,
    isTenanted: data.isTenanted,
    isCashOnly: data.isCashOnly,
    description: data.description.trim(),
    photos: data.photos,
    isFeatured: data.isFeatured || false,
    grossYield: data.grossYield,
    isShareSale: data.isShareSale || false,
    isGetgroundCompany: data.isGetgroundCompany || false
  };
};

export const validateUpdateListing = (data: any): UpdateListingRequest => {
  const updateData: UpdateListingRequest = {};
  
  if (data.developmentName !== undefined) {
    updateData.developmentName = data.developmentName?.trim() || null;
  }
  
  if (data.postTown !== undefined) {
    if (typeof data.postTown !== 'string') {
      throw new Error('Post town must be a string');
    }
    updateData.postTown = data.postTown.trim();
  }
  
  if (data.shortenedPostCode !== undefined) {
    if (typeof data.shortenedPostCode !== 'string') {
      throw new Error('Shortened post code must be a string');
    }
    updateData.shortenedPostCode = data.shortenedPostCode.trim();
  }
  
  if (data.region !== undefined) {
    if (typeof data.region !== 'string') {
      throw new Error('Region must be a string');
    }
    updateData.region = data.region.trim();
  }
  
  if (data.propertyType !== undefined) {
    if (typeof data.propertyType !== 'string') {
      throw new Error('Property type must be a string');
    }
    updateData.propertyType = data.propertyType.trim();
  }
  
  if (data.bedrooms !== undefined) {
    if (typeof data.bedrooms !== 'number' || data.bedrooms < 0) {
      throw new Error('Bedrooms must be a non-negative number');
    }
    updateData.bedrooms = data.bedrooms;
  }
  
  if (data.bathrooms !== undefined) {
    if (typeof data.bathrooms !== 'number' || data.bathrooms < 0) {
      throw new Error('Bathrooms must be a non-negative number');
    }
    updateData.bathrooms = data.bathrooms;
  }
  
  if (data.sizeSqFt !== undefined) {
    if (typeof data.sizeSqFt !== 'number' || data.sizeSqFt <= 0) {
      throw new Error('Size in square feet must be a positive number');
    }
    updateData.sizeSqFt = data.sizeSqFt;
  }
  
  if (data.priceInCents !== undefined) {
    if (typeof data.priceInCents !== 'number' || data.priceInCents < 0) {
      throw new Error('Price in cents must be a non-negative number');
    }
    updateData.priceInCents = data.priceInCents;
  }
  
  if (data.minimumDepositInCents !== undefined) {
    if (typeof data.minimumDepositInCents !== 'number' || data.minimumDepositInCents < 0) {
      throw new Error('Minimum deposit in cents must be a non-negative number');
    }
    updateData.minimumDepositInCents = data.minimumDepositInCents;
  }
  
  if (data.estimatedDepositInCents !== undefined) {
    if (typeof data.estimatedDepositInCents !== 'number' || data.estimatedDepositInCents < 0) {
      throw new Error('Estimated deposit in cents must be a non-negative number');
    }
    updateData.estimatedDepositInCents = data.estimatedDepositInCents;
  }
  
  if (data.rentalIncomeInCents !== undefined) {
    if (typeof data.rentalIncomeInCents !== 'number' || data.rentalIncomeInCents < 0) {
      throw new Error('Rental income in cents must be a non-negative number');
    }
    updateData.rentalIncomeInCents = data.rentalIncomeInCents;
  }
  
  if (data.isTenanted !== undefined) {
    if (typeof data.isTenanted !== 'boolean') {
      throw new Error('Is tenanted must be a boolean');
    }
    updateData.isTenanted = data.isTenanted;
  }
  
  if (data.isCashOnly !== undefined) {
    if (typeof data.isCashOnly !== 'boolean') {
      throw new Error('Is cash only must be a boolean');
    }
    updateData.isCashOnly = data.isCashOnly;
  }
  
  if (data.description !== undefined) {
    if (typeof data.description !== 'string') {
      throw new Error('Description must be a string');
    }
    updateData.description = data.description.trim();
  }
  
  if (data.photos !== undefined) {
    if (!Array.isArray(data.photos)) {
      throw new Error('Photos must be an array');
    }
    
    // Validate each photo
    data.photos.forEach((photo: any, index: number) => {
      if (!photo.originalURL || typeof photo.originalURL !== 'string') {
        throw new Error(`Photo ${index + 1} must have a valid originalURL`);
      }
      if (!photo.standardURL || typeof photo.standardURL !== 'string') {
        throw new Error(`Photo ${index + 1} must have a valid standardURL`);
      }
      if (!photo.thumbnailURL || typeof photo.thumbnailURL !== 'string') {
        throw new Error(`Photo ${index + 1} must have a valid thumbnailURL`);
      }
      if (!photo.mimeType || typeof photo.mimeType !== 'string') {
        throw new Error(`Photo ${index + 1} must have a valid mimeType`);
      }
    });
    
    updateData.photos = data.photos;
  }
  
  if (data.isFeatured !== undefined) {
    if (typeof data.isFeatured !== 'boolean') {
      throw new Error('Is featured must be a boolean');
    }
    updateData.isFeatured = data.isFeatured;
  }
  
  if (data.grossYield !== undefined) {
    if (typeof data.grossYield !== 'number' || data.grossYield < 0) {
      throw new Error('Gross yield must be a non-negative number');
    }
    updateData.grossYield = data.grossYield;
  }
  
  if (data.isShareSale !== undefined) {
    if (typeof data.isShareSale !== 'boolean') {
      throw new Error('Is share sale must be a boolean');
    }
    updateData.isShareSale = data.isShareSale;
  }
  
  if (data.isGetgroundCompany !== undefined) {
    if (typeof data.isGetgroundCompany !== 'boolean') {
      throw new Error('Is getground company must be a boolean');
    }
    updateData.isGetgroundCompany = data.isGetgroundCompany;
  }
  
  if (data.madeVisibleAt !== undefined) {
    updateData.madeVisibleAt = data.madeVisibleAt || null;
  }
  
  return updateData;
}; 