import { StandardOutcome } from '../standard-outcome/standard-outcome';
import { levels, verbs } from '@cyber4all/clark-taxonomy';
import { LEARNING_OUTCOME_ERROR_MESSAGES } from './error-messages';

/**
 * A class to represent a learning outcome.
 * @class
 */
export class LearningOutcome {
  public id?: string;

  private _bloom!: string;
  /**
   * @property {string} bloom
   *       the bloom taxon of this learning outcome
   *       values are restricted according to available levels
   */
  get bloom(): string {
    return this._bloom;
  }
  set bloom(bloom: string) {
    if (bloom && levels.has(bloom)) {
      this._bloom = bloom;
    } else {
      throw new Error(LEARNING_OUTCOME_ERROR_MESSAGES.INVALID_BLOOM(bloom));
    }
  }

  private _verb!: string;
  /**
   * @property {string} verb
   *       the verb this outcome text starts with (eg. define)
   *       values are restricted according to the bloom taxon
   */
  get verb(): string {
    return this._verb;
  }
  set verb(verb: string) {
    if (verb && verbs[this.bloom].has(verb)) {
      this._verb = verb;
    } else {
      throw new Error(
        LEARNING_OUTCOME_ERROR_MESSAGES.INVALID_VERB(this.bloom, verb)
      );
    }
  }

  private _text!: string;
  /**
   * @property {string} text
   *       full text description of this outcome, except the verb
   */
  get text(): string {
    return this._text;
  }
  set text(text: string) {
    if (text !== undefined && text !== null) {
      this._text = text.trim();
    } else {
      throw new Error(LEARNING_OUTCOME_ERROR_MESSAGES.INVALID_TEXT);
    }
  }

  private _mappings: StandardOutcome[];
  /**
   * @property {StandardOutcome[]} mappings (immutable)
   *       outcomes which presumably achieve similar things as this
   *
   * NOTE: individual elements are freely accessible, but the array
   *       reference itself is immutable, and elements can only be
   *       added and removed by the below functions
   */
  get mappings(): StandardOutcome[] {
    return this._mappings;
  }
  /**
   * Maps a StandardOutcome to this learning outcome.
   * @returns {number} the index of the mapping
   */
  mapTo(mapping: StandardOutcome): number {
    return this._mappings.push(mapping) - 1;
  }

  /**
   * Removes the outcome's i-th mapping.
   * @param {number} i the index to remove from the mappings array
   *
   * @returns {StandardOutcome} the outcome which was removed
   */
  unmap(i: number): StandardOutcome {
    return this._mappings.splice(i, 1)[0];
  }

  /**
   *Creates an instance of LearningOutcome.
   * @param {Partial<LearningOutcome>} [outcome]
   * @memberof LearningOutcome
   */
  constructor(outcome?: Partial<LearningOutcome>) {
    this._bloom = Array.from(levels)[0];
    this._verb = Array.from(verbs[this.bloom])[0];
    this._text = '';
    this._mappings = [];
    if (outcome) {
      this.copyOutcome(outcome);
    }
  }

  /**
   * Copies properties of outcome to this outcome if defined
   *
   * @private
   * @param {Partial<LearningOutcome>} outcome
   * @memberof LearningOutcome
   */
  private copyOutcome(outcome: Partial<LearningOutcome>): void {
    this.bloom = outcome.bloom || this.bloom;
    this.verb = outcome.verb || this.verb;
    this.text = outcome.text || this.text;
    if (outcome.mappings) {
      (<StandardOutcome[]>outcome.mappings).map(outcome => this.mapTo(outcome));
    }
  }

  public static instantiate(
    outcome: Partial<LearningOutcome>
  ): LearningOutcome {
    return new LearningOutcome(outcome);
  }
}
