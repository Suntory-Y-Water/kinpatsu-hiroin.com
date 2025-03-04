import { type Result, err, ok } from 'neverthrow';
import { ValidationError } from '../../types/error';

const characterIdBrand = Symbol();
export type CharacterIdPrimitive = number & { [characterIdBrand]: unknown };

export type CharacterId = {
  readonly _type: 'CharacterId';
  readonly val: CharacterIdPrimitive;
};

export const createCharacterId = (value: number): Result<CharacterId, ValidationError> => {
  if (value <= 0) {
    return err(new ValidationError('キャラクターIDは正の整数である必要があります'));
  }

  return ok({ _type: 'CharacterId', val: value as CharacterIdPrimitive });
};
