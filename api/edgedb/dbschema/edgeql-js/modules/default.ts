// GENERATED by @edgedb/generate v0.3.1
// Run 'npx @edgedb/generate edgeql-js' to re-generate

import * as $ from "../reflection";
import * as _ from "../imports";
import type * as _std from "./std";
export type $GlobalTopicλShape = $.typeutil.flatten<_std.$Object_9bb68e701c4311ee837527ad2b784dd3λShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "verified": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false, false, false>;
}>;
type $GlobalTopic = $.ObjectType<"default::GlobalTopic", $GlobalTopicλShape, null, [
  ..._std.$Object_9bb68e701c4311ee837527ad2b784dd3['__exclusives__'],
]>;
const $GlobalTopic = $.makeType<$GlobalTopic>(_.spec, "056ff6ac-1dbc-11ee-b017-5725bb25f1db", _.syntax.literal);

const GlobalTopic: $.$expr_PathNode<$.TypeSet<$GlobalTopic, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($GlobalTopic, $.Cardinality.Many), null);

export type $LinkλShape = $.typeutil.flatten<_std.$Object_9bb68e701c4311ee837527ad2b784dd3λShape & {
  "public": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "topic": $.LinkDesc<$Topic, $.Cardinality.One, {}, false, false,  false, false>;
  "<links[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<links": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Link = $.ObjectType<"default::Link", $LinkλShape, null, [
  ..._std.$Object_9bb68e701c4311ee837527ad2b784dd3['__exclusives__'],
]>;
const $Link = $.makeType<$Link>(_.spec, "05711726-1dbc-11ee-bd04-9959bccb116c", _.syntax.literal);

const Link: $.$expr_PathNode<$.TypeSet<$Link, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Link, $.Cardinality.Many), null);

export type $NoteλShape = $.typeutil.flatten<_std.$Object_9bb68e701c4311ee837527ad2b784dd3λShape & {
  "content": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "public": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "topic": $.LinkDesc<$Topic, $.Cardinality.One, {}, false, false,  false, false>;
  "<notes[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<notes": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Note = $.ObjectType<"default::Note", $NoteλShape, null, [
  ..._std.$Object_9bb68e701c4311ee837527ad2b784dd3['__exclusives__'],
]>;
const $Note = $.makeType<$Note>(_.spec, "05761e2e-1dbc-11ee-8abb-a30f0cce9737", _.syntax.literal);

const Note: $.$expr_PathNode<$.TypeSet<$Note, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Note, $.Cardinality.Many), null);

export type $TopicλShape = $.typeutil.flatten<_std.$Object_9bb68e701c4311ee837527ad2b784dd3λShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "content": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "prettyName": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "public": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "mentionedTopics": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "parentTopic": $.LinkDesc<$Topic, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "topicBacklinks": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "links": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, true,  false, false>;
  "notes": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, true,  false, false>;
  "wiki": $.LinkDesc<$Wiki, $.Cardinality.One, {}, false, false,  false, false>;
  "<topic[is Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false,  false, false>;
  "<mentionedTopics[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<parentTopic[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicBacklinks[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topic[is Note]": $.LinkDesc<$Note, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topics[is Wiki]": $.LinkDesc<$Wiki, $.Cardinality.Many, {}, false, false,  false, false>;
  "<mentionedTopics": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<parentTopic": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topic": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topicBacklinks": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<topics": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Topic = $.ObjectType<"default::Topic", $TopicλShape, null, [
  ..._std.$Object_9bb68e701c4311ee837527ad2b784dd3['__exclusives__'],
  {name: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },wiki: {__element__: $Wiki, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Topic = $.makeType<$Topic>(_.spec, "05728bf6-1dbc-11ee-bb44-5f26f1d99404", _.syntax.literal);

const Topic: $.$expr_PathNode<$.TypeSet<$Topic, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Topic, $.Cardinality.Many), null);

export type $UserλShape = $.typeutil.flatten<_std.$Object_9bb68e701c4311ee837527ad2b784dd3λShape & {
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "profileImage": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "wiki": $.LinkDesc<$Wiki, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "<user[is Wiki]": $.LinkDesc<$Wiki, $.Cardinality.Many, {}, false, false,  false, false>;
  "<user": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null, [
  ..._std.$Object_9bb68e701c4311ee837527ad2b784dd3['__exclusives__'],
]>;
const $User = $.makeType<$User>(_.spec, "057cafaa-1dbc-11ee-9eff-6bab530841cd", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null);

export type $WikiλShape = $.typeutil.flatten<_std.$Object_9bb68e701c4311ee837527ad2b784dd3λShape & {
  "topicConnections": $.PropertyDesc<_std.$json, $.Cardinality.AtMostOne, false, false, false, false>;
  "topicSidebar": $.PropertyDesc<_std.$json, $.Cardinality.AtMostOne, false, false, false, false>;
  "topics": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, true,  false, false>;
  "user": $.LinkDesc<$User, $.Cardinality.One, {}, false, false,  false, false>;
  "<wiki[is Topic]": $.LinkDesc<$Topic, $.Cardinality.Many, {}, false, false,  false, false>;
  "<wiki[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<wiki": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Wiki = $.ObjectType<"default::Wiki", $WikiλShape, null, [
  ..._std.$Object_9bb68e701c4311ee837527ad2b784dd3['__exclusives__'],
]>;
const $Wiki = $.makeType<$Wiki>(_.spec, "0579454a-1dbc-11ee-aba3-a3d9b339fb66", _.syntax.literal);

const Wiki: $.$expr_PathNode<$.TypeSet<$Wiki, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Wiki, $.Cardinality.Many), null);



export { $GlobalTopic, GlobalTopic, $Link, Link, $Note, Note, $Topic, Topic, $User, User, $Wiki, Wiki };

type __defaultExports = {
  "GlobalTopic": typeof GlobalTopic;
  "Link": typeof Link;
  "Note": typeof Note;
  "Topic": typeof Topic;
  "User": typeof User;
  "Wiki": typeof Wiki
};
const __defaultExports: __defaultExports = {
  "GlobalTopic": GlobalTopic,
  "Link": Link,
  "Note": Note,
  "Topic": Topic,
  "User": User,
  "Wiki": Wiki
};
export default __defaultExports;
