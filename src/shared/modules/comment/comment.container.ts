import { Container } from 'inversify';
import { Component } from '../../types/component.js';
import { types } from '@typegoose/typegoose';
import { CommentEntity, CommentService, DefaultCommentService } from './index.js';
import { CommentModel } from '../models.js';

export function createCommentContainer() {
  const commentContainer = new Container();

  commentContainer.bind<CommentService>(Component.CommentService)
    .to(DefaultCommentService)
    .inSingletonScope();

  commentContainer.bind<types.ModelType<CommentEntity>>(Component.CommentModel)
    .toConstantValue(CommentModel);

  return commentContainer;
}